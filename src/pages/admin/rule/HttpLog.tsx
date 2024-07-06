import schema2component from "../../../utils/schema2component";


const schema = {
    "type": "page",

    "body": {
        "autoGenerateFilter": {
            "defaultCollapsed":false
        },
        "type":"crud",
        "defaultCollapsed": false,
        "api":"get:/api/httplogs",
        "syncLocation":false,
        "headerToolbar": [
            "bulkActions"
        ],
        "bulkActions": [
            {
                "label": "批量删除",
                "actionType": "ajax",
                "api": "get:/api/delhttplogbyids?ids=${ids}",
                "confirmText": "确定要批量删除?"
            },
        ],
        "columns":[
            {"name":"id","label":"id"},
            {"name":"hostname","label":"hostname","searchable": true},
            {"name":"remoteaddr","label":"remoteaddr","searchable": true},
            {"name":"method","label":"method","searchable": true},
            {"name":"url","label":"url","searchable": true},
            {"name":"body","label":"body","searchable": true},
            {"name":"header","label":"header","searchable": true},
            {"name":"path","label":"path","searchable": true},
            {
                "type": "operation",
                "label": "操作",
                "buttons": [
                    {
                        "label": "删除",
                        "type": "button",
                        "actionType": "ajax",
                        "level": "danger",
                        "confirmText": "确认要删除？",
                        "api": "get:/api/deldnslogbyid?id=${id}"
                    }
                ]
            }
        ]
    }
};

export default schema2component(schema);
