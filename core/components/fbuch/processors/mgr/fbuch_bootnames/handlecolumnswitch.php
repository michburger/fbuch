<?php

if (empty($scriptProperties['object_id'])) {
    return $modx->error->failure($modx->lexicon('quip.thread_err_ns'));
    return;
}

$config = $modx->migx->customconfigs;
$prefix = isset($config['prefix']) && !empty($config['prefix']) ? $config['prefix'] : null;
if (isset($config['use_custom_prefix']) && !empty($config['use_custom_prefix'])) {
    $prefix = isset($config['prefix']) ? $config['prefix'] : '';
}

if (!empty($config['packageName'])) {
    $packageNames = explode(',', $config['packageName']);

    if (count($packageNames) == '1') {
        //for now connecting also to foreign databases, only with one package by default possible
        $xpdo = $modx->migx->getXpdoInstanceAndAddPackage($config);
    } else {
        //all packages must have the same prefix for now!
        foreach ($packageNames as $packageName) {
            $packagepath = $modx->getOption('core_path') . 'components/' . $packageName . '/';
            $modelpath = $packagepath . 'model/';
            if (is_dir($modelpath)) {
                $modx->addPackage($packageName, $modelpath, $prefix);
            }

        }
        $xpdo = &$modx;
    }
} else {
    $xpdo = &$modx;
}
$classname = $config['classname'];

if ($modx->lexicon) {
    $modx->lexicon->load($packageName . ':default');
}

$col = explode(':', $modx->getOption('col', $scriptProperties, ''));

$value = isset($col[1]) ? $col[1] : '0';
$col = isset($col[0]) ? $col[0] : '';

if (empty($col)) {
    return $modx->error->failure('no column');
}

$modx->migx->loadConfigs();

$name_id = $modx->getOption('object_id',$scriptProperties,'');
$boot_id = $modx->getOption('co_id',$scriptProperties,''); 


switch ($col) {
    case 'allowed':
        if ($object = $modx->getObject('fbuchBootAllowedNames',array('name_id'=>$name_id,'boot_id'=>$boot_id))){
            
        }
        
        if ($value == 1){
            if ($object) {
                
            }else{
                $object = $modx->newObject('fbuchBootAllowedNames');
                $object->set('name_id',$name_id);
                $object->set('boot_id',$boot_id);
                $object->save();
            }
        }else{
            if ($object) {
                $object->remove();
            }
        }

        break;

}




//clear cache for all contexts
/*
$collection = $modx->getCollection('modContext');
foreach ($collection as $context) {
$contexts[] = $context->get('key');
}
$modx->cacheManager->refresh(array(
'db' => array(),
'auto_publish' => array('contexts' => $contexts),
'context_settings' => array('contexts' => $contexts),
'resource' => array('contexts' => $contexts),
));
*/
return $modx->error->success();
