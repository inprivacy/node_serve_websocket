endpoint_status = (id) => {
    return {
        msg_type: "endpoint_status",
        content: {
            endpoint_id: 'endpoint_id_0' + id,
            records: {
                record_01: (Math.random() * 20).toFixed(2),
                record_02: (Math.random() * 20).toFixed(2),
                record_03: (Math.random() * 20).toFixed(2),
                record_04: Math.random().toFixed(2) > 0.5 ? 1 : 0,
                record_05: Math.random().toFixed(2) > 0.5 ? 1 : 0,
                record_06: Math.random().toFixed(2) > 0.5 ? 1 : 0,
                record_07: Math.random().toFixed(2) > 0.5 ? 1 : 0,
                record_08: Math.random().toFixed(2) > 0.5 ? 1 : 0,
                record_09: Math.random().toFixed(2) > 0.5 ? 1 : 0,
                power: Math.random().toFixed(2) > 0.5 ? 1 : 0,
            }
        }
    };
}

project_status = () => {
    return {
        msg_type: "project_status",
        content: {
            endpoint_usage: {
                endpoint_id_01: (Math.random() * 20).toFixed(2),
                endpoint_id_02: (Math.random() * 20).toFixed(2),
                endpoint_id_03: (Math.random() * 20).toFixed(2),
                endpoint_id_04: (Math.random() * 20).toFixed(2),
                endpoint_id_05: (Math.random() * 20).toFixed(2),
                endpoint_id_06: (Math.random() * 20).toFixed(2),
                endpoint_id_07: (Math.random() * 20).toFixed(2),
            },
        }
    };
}