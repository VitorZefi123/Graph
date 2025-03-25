class AccordingValues {
    static Columns = {
        DIN_277: ' DIN 277',
        ROOM_ZONES: 'room zones',
        COMPRESSED_AIR: 'compressed air',
        OFFICE: 'office occupancy',
        PAM: 'PAM area ID',
        FIRE_DOORS: 'fire doors',
        DOORS: 'doors',
        FLOORS: 'floors',
    };

    static ColumnNames = {
        DIN_277_SHORT: ' DIN 277',
        ROOM_ZONES_SHORT: 'room zones',
        COMPRESSED_AIR_SHORT: 'compresse',
        OFFICE_SHORT: 'office',
        PAM_SHORT: 'PAM',
        FIRE_DOORS_SHORT: 'fire',
        DOORS_SHORT: 'doors',        
        FLOORS_SHORT: 'floor',    
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [AccordingValues.ColumnNames.DIN_277_SHORT]: AccordingValues.Columns.DIN_277,
        [AccordingValues.ColumnNames.ROOM_ZONES_SHORT]: AccordingValues.Columns.ROOM_ZONES,
        [AccordingValues.ColumnNames.COMPRESSED_AIR_SHORT]: AccordingValues.Columns.COMPRESSED_AIR,
        [AccordingValues.ColumnNames.OFFICE_SHORT]: AccordingValues.Columns.OFFICE,
        [AccordingValues.ColumnNames.PAM_SHORT]: AccordingValues.Columns.PAM,
        [AccordingValues.ColumnNames.FIRE_DOORS_SHORT]: AccordingValues.Columns.FIRE_DOORS,
        [AccordingValues.ColumnNames.DOORS_SHORT]: AccordingValues.Columns.DOORS,
        [AccordingValues.ColumnNames.FLOORS_SHORT]: AccordingValues.Columns.FLOORS,
    };
}

export default AccordingValues;
