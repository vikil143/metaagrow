import Realm from "realm";
import { createRealmContext } from "@realm/react"

export class LocalStore extends Realm.Object<LocalStore> {
    static schema = {
        name: "LocalStore",
        properties: {
            imageUri: "string",
        },
    }
}

const realmConfig: Realm.Configuration = {
    schema: [LocalStore],
}

const { RealmProvider, useQuery, useRealm } = createRealmContext(realmConfig)

export { RealmProvider, useQuery, useRealm }
