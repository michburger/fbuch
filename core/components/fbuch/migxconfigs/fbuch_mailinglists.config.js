{
  "id":63,
  "name":"fbuch_mailinglists",
  "formtabs":[
    {
      "MIGX_id":92,
      "caption":"Mailinglist",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":396,
          "field":"name",
          "caption":"Name der Liste",
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
          "MIGX_id":397,
          "field":"target_group",
          "caption":"Zielgruppe",
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
          "pos":2
        },
        {
          "MIGX_id":398,
          "field":"type",
          "caption":"Sportart",
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
          "inputOptionValues":"Typ w\u00e4hlen==||Rudern||Teamrowing||sonstige Einladungen||Mitgliederinfos",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":3
        },
        {
          "MIGX_id":400,
          "field":"description",
          "caption":"Beschreibung",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"textarea",
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
          "MIGX_id":487,
          "field":"weekday",
          "caption":"Wochentag",
          "description":"Bitte hier den Wochentag zur richtigen Sortierung der Listen eintragen!",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"Bitte Tag ausw\u00e4hlen==||Mo==1||Di==2||Mi==3||Do==4||Fr==5||Sa==6||So==7",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":5
        },
        {
          "MIGX_id":488,
          "field":"time",
          "caption":"Uhrzeit",
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
          "pos":6
        },
        {
          "MIGX_id":489,
          "field":"member_filter_id",
          "caption":"Mail Filter",
          "description":"Mail Filter verwenden zum importieren der gefilterten Mitglieder in Einladungsliste",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"@CHUNK input_options_mailfilter",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":7
        },
        {
          "MIGX_id":490,
          "field":"restrict_member_filter_id",
          "caption":"Zugangsbeschr\u00e4nkung",
          "description":"Liste nur f\u00fcr hiermit gefilterte Mitglieder zug\u00e4nglich machen",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"@CHUNK input_options_mailfilter",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":8
        },
        {
          "MIGX_id":491,
          "field":"hidden",
          "caption":"Auf Subscribe Seite verbergen",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"verbergen==1",
          "default":"0",
          "useDefaultIfEmpty":"0",
          "pos":9
        }
      ],
      "pos":1
    },
    {
      "MIGX_id":93,
      "caption":"Empf\u00e4nger",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":401,
          "field":"names",
          "caption":"Empf\u00e4nger",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"migxdb",
          "validation":"",
          "configs":"fbuch_mailinglistnames:fbuch",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "pos":1
        }
      ],
      "pos":2
    }
  ],
  "contextmenus":"remove",
  "actionbuttons":"addItem",
  "columnbuttons":"update||remove",
  "filters":"",
  "extended":{
    "migx_add":"Liste erstellen",
    "disable_add_item":"",
    "add_items_directly":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"fbuch_mailinglists",
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
    "classname":"fbuchMailinglist",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "sortconfig":[
      {
        "sortby":"weekday"
      },
      {
        "sortby":"time"
      }
    ],
    "gridpagesize":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":"0",
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"no",
    "getlistwhere":"",
    "joins":"",
    "hooksnippets":"",
    "cmpmaincaption":"",
    "cmptabcaption":"Mailinglisten",
    "cmptabdescription":"Verwalte Mailinglisten (Termin Einladungslisten) hier",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "permissions":{
    "apiaccess":"",
    "view":"",
    "list":"",
    "save":"",
    "create":"",
    "remove":"",
    "delete":"",
    "publish":"",
    "unpublish":"",
    "viewdeleted":"",
    "viewunpublished":""
  },
  "fieldpermissions":"",
  "columns":[
    {
      "MIGX_id":2,
      "header":"id",
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
      "header":"name",
      "dataIndex":"name",
      "width":40,
      "sortable":true,
      "show_in_grid":1,
      "customrenderer":"",
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"",
      "editor":""
    },
    {
      "MIGX_id":5,
      "header":"target_group",
      "dataIndex":"target_group",
      "width":40,
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
      "MIGX_id":7,
      "header":"weekday",
      "dataIndex":"weekday",
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
      "MIGX_id":8,
      "header":"time",
      "dataIndex":"time",
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
      "MIGX_id":10,
      "header":"Sportart",
      "dataIndex":"type",
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
    }
  ],
  "createdby":1,
  "createdon":"2018-05-28 17:06:30",
  "editedby":1,
  "editedon":"2021-07-10 09:35:47",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"-1-11-30 00:00:00",
  "publishedby":0,
  "category":""
}