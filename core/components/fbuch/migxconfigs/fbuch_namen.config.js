{
  "id":59,
  "name":"fbuch_namen",
  "formtabs":[
    {
      "MIGX_id":88,
      "caption":"Eintrag",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":371,
          "field":"lastname",
          "caption":"lastname",
          "pos":1
        },
        {
          "MIGX_id":372,
          "field":"firstname",
          "caption":"firstname",
          "pos":2
        },
        {
          "MIGX_id":373,
          "field":"gender",
          "caption":"gender",
          "pos":3
        },
        {
          "MIGX_id":374,
          "field":"birth_date",
          "caption":"birth_date",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":4
        },
        {
          "MIGX_id":375,
          "field":"member_status",
          "caption":"member_status",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"Unbekannt||Mitglied||Gast||VHS",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":5
        },
        {
          "MIGX_id":376,
          "field":"riot_user_id",
          "caption":"riot_user_id",
          "pos":6
        },
        {
          "MIGX_id":377,
          "field":"email",
          "caption":"email",
          "pos":7
        },
        {
          "MIGX_id":378,
          "field":"phone",
          "caption":"phone",
          "pos":8
        }
      ],
      "pos":1
    }
  ],
  "contextmenus":"update||recall_remove_delete",
  "actionbuttons":"addItem||toggletrash||syncmembers",
  "columnbuttons":"",
  "filters":[
    {
      "MIGX_id":1,
      "name":"search_name",
      "label":"",
      "emptytext":"Namen suchen",
      "type":"textbox",
      "getlistwhere":{
        "firstname:LIKE":"%[[+search_name]]%",
        "OR:lastname:LIKE":"%[[+search_name]]%"
      },
      "getcomboprocessor":"",
      "combotextfield":"",
      "comboidfield":"",
      "combowhere":"",
      "comboclassname":"",
      "combopackagename":"",
      "combo_use_custom_prefix":"0",
      "comboprefix":"",
      "combojoins":"",
      "comboparent":"",
      "default":""
    }
  ],
  "extended":{
    "migx_add":"Namen erstellen",
    "disable_add_item":"",
    "add_items_directly":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"fbuch_namen",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "media_source_id":"",
    "multiple_formtabs":"",
    "multiple_formtabs_label":"",
    "multiple_formtabs_field":"",
    "multiple_formtabs_optionstext":"",
    "multiple_formtabs_optionsvalue":"",
    "actionbuttonsperrow":4,
    "winbuttonslist":"",
    "extrahandlers":"",
    "filtersperrow":4,
    "packageName":"fbuch",
    "classname":"fbuchNames",
    "task":"names",
    "getlistsort":"lastname",
    "getlistsortdir":"",
    "sortconfig":"",
    "gridpagesize":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "hooksnippets":"",
    "cmpmaincaption":"",
    "cmptabcaption":"Namen",
    "cmptabdescription":"",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":2,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":true,
      "show_in_grid":1,
      "customrenderer":"",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":""
    },
    {
      "MIGX_id":3,
      "header":"",
      "dataIndex":"deleted",
      "width":"",
      "sortable":"false",
      "show_in_grid":"0",
      "customrenderer":"",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":""
    },
    {
      "MIGX_id":8,
      "header":"Name",
      "dataIndex":"lastname",
      "width":20,
      "sortable":"false",
      "show_in_grid":1,
      "customrenderer":"",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":""
    },
    {
      "MIGX_id":11,
      "header":"Vorname",
      "dataIndex":"firstname",
      "width":20,
      "sortable":"false",
      "show_in_grid":1,
      "customrenderer":"",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":""
    }
  ],
  "createdby":1,
  "createdon":"2016-09-10 13:51:42",
  "editedby":1,
  "editedon":"2018-05-27 22:54:58",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"-1-11-30 00:00:00",
  "publishedby":0,
  "category":""
}