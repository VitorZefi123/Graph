class TableNames {
    static Tables = {
        ROOM: 'room',
        BUILDING: 'building',
        INSTALLATION: 'installation',
        FURNITURE: 'furniture',
        USER_ACCOUNT: 'user account',
        SYSTEMS: 'system',
        EMPLOYEE: 'employee',
        LEVEL: 'level',
        LEASES: 'leases',
        USER: 'user',
        ASSET: 'asset',
        CONTRACT: 'contract',
        RENTAL: 'rental',
        PARKING: 'parking',
        DRAWING: 'drawing'
    };

    static TableShortNames = {
        ROOM_SHORT: 'room',
        BUILDING_SHORT: 'building',
        INSTALLATION_SHORT: 'installation',
        FURNITURE_SHORT: 'furniture',
        USER_ACCOUNT_SHORT: 'user account',
        SYSTEMS_SHORT: 'system',
        EMPLOYEE_SHORT: 'employee',
        LEVEL_SHORT: 'level',
        LEASES_SHORT: 'leases',
        USER_SHORT: 'user',
        ASSET_SHORT: 'asset',
        CONTRACT_SHORT: 'contract',
        RENTAL_SHORT: 'rental',
        PARKING_SHORT: 'parking',
        DRAWING_SHORT: 'draw'
        
    };

    // Mapping from variations to standard table names
    static tableToNameMap = {
        [TableNames.TableShortNames.ROOM_SHORT]: TableNames.Tables.ROOM,
        [TableNames.TableShortNames.BUILDING_SHORT]: TableNames.Tables.BUILDING,
        [TableNames.TableShortNames.INSTALLATION_SHORT]: TableNames.Tables.INSTALLATION,
        [TableNames.TableShortNames.FURNITURE_SHORT]: TableNames.Tables.FURNITURE,
        [TableNames.TableShortNames.USER_ACCOUNT_SHORT]: TableNames.Tables.USER_ACCOUNT,
        [TableNames.TableShortNames.SYSTEMS_SHORT]: TableNames.Tables.SYSTEMS,
        [TableNames.TableShortNames.EMPLOYEE_SHORT]: TableNames.Tables.EMPLOYEE,
        [TableNames.TableShortNames.LEVEL_SHORT]: TableNames.Tables.LEVEL,
        [TableNames.TableShortNames.LEASES_SHORT]: TableNames.Tables.LEASES,
        [TableNames.TableShortNames.USER_SHORT]: TableNames.Tables.USER,
        [TableNames.TableShortNames.ASSET_SHORT]: TableNames.Tables.ASSET,
        [TableNames.TableShortNames.CONTRACT_SHORT]: TableNames.Tables.CONTRACT,
        [TableNames.TableShortNames.RENTAL_SHORT]: TableNames.Tables.RENTAL,
        [TableNames.TableShortNames.PARKING_SHORT]: TableNames.Tables.PARKING,
        [TableNames.TableShortNames.DRAWING_SHORT]: TableNames.Tables.DRAWING,
    };

    static getTableNames() {
        return Object.values(TableNames.Tables);
    }
}

export default TableNames;
