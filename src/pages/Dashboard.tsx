import schema2component from "@/utils/schema2component";


const schema = {
    "type": "page",

    "body": {
        "autoGenerateFilter": {
            "defaultCollapsed":false
        },
        "type":"crud",
        "defaultCollapsed": false,
        "api":"get:/api/dnslogs",
        "syncLocation":false,
        "headerToolbar": [
            "bulkActions"
        ],
        "bulkActions": [
            {
                "label": "批量删除",
                "actionType": "ajax",
                "api": "get:/api/deldnslogbyids?ids=${ids}",
                "confirmText": "确定要批量删除?"
            },
        ],
        "columns":[
            {"name":"id","label":"id"},
            {"name":"receiveip","label":"receiveip","searchable": true},
            {"name":"queryname","label":"queryname","searchable": true},
            {"name":"querytype","label":"querytype","searchable": true},
            {"name":"createtime","label":"createtime"},
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
