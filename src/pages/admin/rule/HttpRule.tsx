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
                    "api": "post:/api/addhttprule",
                    "body": [
                        {
                            "type": "input-text",
                            "name": "path",
                            "label": "path",
                            "value":"/"
                        },
                        {
                            "type": "input-text",
                            "name": "statuscode",
                            "label": "statuscode",
                            "value": "200"
                        },
                        {
                            "type": "input-text",
                            "name": "redirecturl",
                            "label": "redirecturl",

                        }
                        ,
                        {
                            "type": "input-text",
                            "name": "header",
                            "label": "header",
                            "value": "{}"
                        }
                        ,
                        {
                            "type": "input-text",
                            "name": "body",
                            "label": "body"
                        }
                        ,
                        {
                            "type": "input-text",
                            "name": "method",
                            "label": "method",
                            "value":"GET",
                            "options": [
                                {
                                    "label": "GET",
                                    "value": "GET"
                                },
                                {
                                    "label": "POST",
                                    "value": "POST"
                                },
                                {
                                    "label": "HEAD",
                                    "value": "HEAD"
                                },
                                {
                                    "label": "TRACE",
                                    "value": "TRACE"
                                }
                                ,
                                {
                                    "label": "CONNECT",
                                    "value": "CONNECT"
                                }
                            ]
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
        "api":"post:/api/gethttprule",
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
            {"name":"path","label":"path","searchable": true},
            {"name":"statuscode","label":"statuscode","searchable": true},
            {"name":"redirecturl","label":"redirecturl","searchable": true},
            {"name":"header","label":"url","header": true},
            {"name":"body","label":"body","body": true},
            {"name":"method","label":"method","searchable": true},
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
                        "api": "get:/api/delhttprule?id=${id}"
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
                                    "url":"/api/updatehttprule",
                                    "data": {
                                        "&": "$$"
                                    }
                                },
                                "body": [
                                    {
                                        "type": "input-text",
                                        "name": "id",
                                        "label": "id"
                                    },
                                    {
                                        "type": "input-text",
                                        "name": "path",
                                        "label": "path"
                                    },
                                    {
                                        "type": "input-text",
                                        "name": "statuscode",
                                        "label": "statuscode"
                                    },
                                    {
                                        "type": "input-text",
                                        "name": "redirecturl",
                                        "label": "redirecturl"
                                    }
                                    ,
                                    {
                                        "type": "input-text",
                                        "name": "header",
                                        "label": "header"
                                    }
                                    ,
                                    {
                                        "type": "input-text",
                                        "name": "body",
                                        "label": "body"
                                    }
                                    ,
                                    {
                                        "type": "input-text",
                                        "name": "method",
                                        "label": "method"
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
