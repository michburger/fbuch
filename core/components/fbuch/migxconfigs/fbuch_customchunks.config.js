{
  "id":69,
  "name":"fbuch_customchunks",
  "formtabs":[
    {
      "MIGX_id":99,
      "caption":"Differenz",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":498,
          "field":"",
          "caption":"",
          "description":" \n       [[!phpdiff? &type=`5` &oldChunk=`[[+original_name]]` &newChunk=`[[+name]]`]]   \n        <style type=\"text\/css\">\n            html {\n                font-size: 13px;\n            }\n            .token.coord {\n                color: #6cf;\n            }\n            .token.diff.bold {\n                color: #fb0;\n                font-weight: normal;\n            }\n\n            \n            [[+phpdiff_style]]\n        <\/style>        \n\n        [[+phpdiff_output]]",
          "description_is_code":1,
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
        }
      ],
      "pos":1
    },
    {
      "MIGX_id":98,
      "caption":"Inhalt",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":495,
          "field":"snippet",
          "caption":"Chunk Inhalt",
          "description":"\u00c4nderungen werden gespeichert",
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
          "pos":1
        },
        {
          "MIGX_id":496,
          "field":"original_snippet",
          "caption":"Original Chunk",
          "description":"\u00c4nderungen werden nicht gespeichert",
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
          "pos":2
        }
      ],
      "pos":2
    }
  ],
  "contextmenus":"",
  "actionbuttons":"customchunks_tojson",
  "columnbuttons":"update",
  "filters":"",
  "extended":{
    "migx_add":"",
    "disable_add_item":"",
    "add_items_directly":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"fbuch_customchunks",
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
    "classname":"modChunk",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "sortconfig":[
      {
        "sortby":"name"
      }
    ],
    "gridpagesize":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":{
      "name:LIKE":"custom_%"
    },
    "joins":"",
    "hooksnippets":{
      "aftergetfields":"fbuch_customchunks_aftergetfields"
    },
    "cmpmaincaption":"",
    "cmptabcaption":"Custom Chunks Differenzen",
    "cmptabdescription":"Bearbeiten und Vergleichen der Custom Chunk Inhalte mit den Original Chunks",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
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
      "header":"description",
      "dataIndex":"description",
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
    }
  ],
  "createdby":1,
  "createdon":"2021-01-20 17:52:20",
  "editedby":1,
  "editedon":"2021-01-25 23:35:06",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"-1-11-30 00:00:00",
  "publishedby":0,
  "category":""
}