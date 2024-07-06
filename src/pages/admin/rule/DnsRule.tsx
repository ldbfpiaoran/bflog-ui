import schema2component from "../../../utils/schema2component";


const schema = {
    "type": "page",

    "body": [
        {
            "label": "新增",
            "type": "button",
            "actionType": "dialog",
            "level": "primary",
            "className": "m-b-sm",
            "dialog": {
                "title": "新增表单",
                "body": {
                    "type": "form",
                    "api": "post:/api/adddnsrule",
                    "body": [
                        {
                            "type": "input-text",
                            "name": "name",
                            "label": "name",
                        },
                        {
                            "type": "input-text",
                            "name": "ip_addresses",
                            "label": "ip_addresses",
                            "value": "8.8.8.8"
                        }
                    ]
                }
            }
        },
        {"autoGenerateFilter": {
                "defaultCollapsed":false
            },
            "type":"crud",
            "defaultCollapsed": false,
            "api":"post:/api/getdnsrule",
            "syncLocation":false,
            "headerToolbar": [
                "bulkActions"
            ],
            "bulkActions": [
                {
                    "label": "批量删除",
                    "actionType": "ajax",
                    "api": "get:/api/deldnsrulebyid?names=${names}",
                    "confirmText": "确定要批量删除?"
                },
            ],
            "columns":[
                {"name":"id","label":"id"},
                {"name":"name","label":"name","searchable": true},
                {"name":"ip_addresses","label":"ip_addresses","searchable": true},
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
                            "api": "get:/api/deldnsrulebyid?name=${name}&id=${id}"
                        },
                        {
                            "label": "修改",
                            "type": "button",
                            "actionType": "drawer",
                            "drawer": {
                                "title": "修改",
                                "body": {
                                    "type": "form",
                                    "api": {
                                        "method":"post",
                                        "url":"/api/updatednsrule",
                                        "data": {
                                            "&": "$$","id":"${id}"
                                        }
                                    },
                                    "body": [

                                        {
                                            "type": "input-text",
                                            "name": "name",
                                            "label": "name"
                                        },
                                        {
                                            "type": "input-text",
                                            "name": "ip_addresses",
                                            "label": "ip_addresses"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
};

export default schema2component(schema);
