{
  "id":18,
  "name":"fbuch_fahrtnamen",
  "formtabs":[
    {
      "MIGX_id":31,
      "caption":"Fahrt",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":136,
          "field":"name",
          "caption":"Name",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":1
        },
        {
          "MIGX_id":137,
          "field":"gattung",
          "caption":"Gattung",
          "description":"1,2,3,4,8",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":2
        },
        {
          "MIGX_id":138,
          "field":"seats",
          "caption":"Pl\u00e4tze",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":3
        }
      ],
      "pos":1
    }
  ],
  "contextmenus":"update",
  "actionbuttons":"addItem",
  "columnbuttons":"",
  "filters":"",
  "extended":{
    "migx_add":"Namen erstellen",
    "disable_add_item":"",
    "add_items_directly":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"fbuch_fahrtnamen",
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
    "classname":"fbuchFahrtNames",
    "task":"fahrtnam",
    "getlistsort":"",
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
    "joins":[
      {
        "alias":"Fahrt"
      },
      {
        "alias":"Name"
      },
      {
        "alias":"Boot",
        "classname":"fbuchBoot",
        "on":"Boot.id = Fahrt.boot_id"
      }
    ],
    "hooksnippets":"",
    "cmpmaincaption":"",
    "cmptabcaption":"FahrtNamen",
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
      "MIGX_id":17,
      "header":"Name_firstname",
      "dataIndex":"Name_firstname",
      "width":30,
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
      "MIGX_id":18,
      "header":"Name_lastname",
      "dataIndex":"Name_lastname",
      "width":30,
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
      "MIGX_id":16,
      "header":"Fahrt_date",
      "dataIndex":"Fahrt_date",
      "width":20,
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
      "MIGX_id":22,
      "header":"Fahrt_start_time",
      "dataIndex":"Fahrt_start_time",
      "width":15,
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
      "MIGX_id":20,
      "header":"Boot_name",
      "dataIndex":"Boot_name",
      "width":30,
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
      "MIGX_id":15,
      "header":"Fahrt_km",
      "dataIndex":"Fahrt_km",
      "width":15,
      "sortable":true,
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
  "createdon":"2016-09-19 06:14:41",
  "editedby":1,
  "editedon":"2018-01-23 12:17:36",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"-1-11-30 00:00:00",
  "publishedby":0,
  "category":""
}