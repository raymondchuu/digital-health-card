const { Contract } = require('fabric-contract-api');

class AssetTransfer extends Contract {

    async InitLedger(ctx) {
        const assets = [
            {
                ID: 'a2f9f0b3-c114-47b0-ba3e-8215c3ce07eb',
                HealthNum: '4k2j3l4jio3j24io32j4',
                Name: 'Joshua Ng',
                Password: 'password123',
                profileImage: 'https://previews.123rf.com/images/microphoto1981/microphoto19811710/microphoto1981171000024/88705547-default-avatar-profile-icon-grey-photo-placeholder-male-default-profile-gray-person-picture-isolated.jpg',
                Gender: 'M',
                Address: '123 main street',
                Email: 'jng92@myseneca.ca',
                CovidTests: [
                    {
                        Date: 'December 1, 2020',
                        Result: '-'
                    },
                    {
                        Date: 'March 1, 2021',
                        Result: '+'
                    },
                ],
                Vaccinations: [
                    {
                        Type: 'Astrazeneca',
                        Date: 'February 25, 2021',
                    }
                ]
            },
            {
                ID: 'a2f9f0b3-c114-47b0-ba3e-8215c3ce07k3',
                HealthNum: '5kj3ij4o3k2',
                Name: 'Jamie Tang',
                Password: 'password123',
                profileImage: 'https://previews.123rf.com/images/microphoto1981/microphoto19811710/microphoto1981171000024/88705547-default-avatar-profile-icon-grey-photo-placeholder-male-default-profile-gray-person-picture-isolated.jpg',
                Gender: 'M',
                Address: '124 main street',
                Email: 'jtang169@gmail.com',
                CovidTests: [
                    {
                        Date: 'December 1, 2020',
                        Result: '-'
                    },
                ],
                Vaccinations: [
                    {
                        Type: 'Astrazeneca',
                        Date: 'February 25, 2021',
                    }
                ]
            },
        ]

        for (const asset of assets) {
            asset.docType = 'asset';
            await ctx.stub.putState(asset.ID, Buffer.from(JSON.stringify(asset)));
            console.info(`Asset ${asset.ID} initialized`);
        }
    }

    // CreateAsset issues a new asset to the world state with given details.
    async CreateAsset(ctx, id, name, gender, address, email, covidtests, vaccinations) {
        const asset = {
            ID: id,
            Name: name,
            Gender: gender,
            Address: address,
            Email: email,
            CovidTests: covidtests,
            Vaccinations: vaccinations
        };
        ctx.stub.putState(id, Buffer.from(JSON.stringify(asset)));
        return JSON.stringify(asset);
    }

    // ReadAsset returns the asset stored in the world state with given id.
    async ReadAsset(ctx, id) {
        const assetJSON = await ctx.stub.getState(id); // get the asset from chaincode state
        if (!assetJSON || assetJSON.length === 0) {
            throw new Error(`The asset ${id} does not exist`);
        }
        return assetJSON.toString();
    }

    //UpdateAsset updates an existing asset in the world state with provided parameters.
    async UpdateAsset(ctx, id, color, size, owner, appraisedValue) {
        const exists = await this.AssetExists(ctx, id);
        if (!exists) {
            throw new Error(`The asset ${id} does not exist`);
        }

        // overwriting original asset with new asset
        const updatedAsset = {
            ID: id,
            Color: color,
            Size: size,
            Owner: owner,
            AppraisedValue: appraisedValue,
        };
        return ctx.stub.putState(id, Buffer.from(JSON.stringify(updatedAsset)));
    }

    //DeleteAsset deletes an given asset from the world state.
    async DeleteAsset(ctx, id) {
        const exists = await this.AssetExists(ctx, id);
        if (!exists) {
            throw new Error(`The asset ${id} does not exist`);
        }
        return ctx.stub.deleteState(id);
    }

    // AssetExists returns true when asset with given ID exists in world state.
    async AssetExists(ctx, id) {
        const assetJSON = await ctx.stub.getState(id);
        return assetJSON && assetJSON.length > 0;
    }

    // TransferAsset updates the owner field of asset with given id in the world state.
    async TransferAsset(ctx, id, newOwner) {
        const assetString = await this.ReadAsset(ctx, id);
        const asset = JSON.parse(assetString);
        asset.Owner = newOwner;
        return ctx.stub.putState(id, Buffer.from(JSON.stringify(asset)));
    }

    // GetAllAssets returns all assets found in the world state.
    async GetAllAssets(ctx) {
        const allResults = [];
        // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: result.value.key, Record: record });
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }
}

module.exports = AssetTransfer;
