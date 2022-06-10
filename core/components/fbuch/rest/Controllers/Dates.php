<?php

class MyControllerDates extends modRestController {
    
    public $defaultLimit = 0;
    public $classKey = 'fbuchDate';
    public $defaultSortField = 'date';
    public $defaultSortDirection = 'ASC';

    public function beforeDelete() {
        throw new Exception('Unauthorized', 401);
    }

    public function beforePut() {
        throw new Exception('Unauthorized', 401);
    }

    public function beforePost() {
        throw new Exception('Unauthorized', 401);
    }

    public function verifyAuthentication() {
        return true;
    }
    
    public function XXXgetList() {
        $this->getProperties();
        $c = $this->modx->newQuery($this->classKey);
        //$c = $this->addSearchQuery($c);
        $c = $this->prepareListQueryBeforeCount($c);
        $total = $this->modx->getCount($this->classKey,$c);
        $alias = !empty($this->classAlias) ? $this->classAlias : $this->classKey;
        //$c->select($this->modx->getSelectColumns($this->classKey,$alias));
        $c->select(array('id','type'));
        $c = $this->prepareListQueryAfterCount($c);
        $c->sortby('type');
        //$c->sortby($this->getProperty($this->getOption('propertySort','sort'),$this->defaultSortField),$this->getProperty($this->getOption('propertySortDir','dir'),$this->defaultSortDirection));
        $limit = $this->getProperty($this->getOption('propertyLimit','limit'),$this->defaultLimit);
        if (empty($limit)) $limit = $this->defaultLimit;
        $c->limit($limit,$this->getProperty($this->getOption('propertyOffset','start'),$this->defaultOffset));
        $objects = $this->modx->getCollection($this->classKey,$c);
        if (empty($objects)) $objects = array();
        $list = array();
        /** @var xPDOObject $object */
        foreach ($objects as $object) {
            $list[] = $this->prepareListObject($object);
        }
        return $this->collection($list,$total);
    }    

    protected function prepareListQueryBeforeCount(xPDOQuery $c) {
        $returntype = $this->getProperty('returntype');
        $show_hidden = $this->getProperty('show_hidden');
        $which_page = $this->getProperty('which_page');

        $joins = '[{"alias":"Type"}]';
        
        $this->modx->migx->prepareJoins($this->classKey, json_decode($joins,1) , $c);


     /*   
        if($show_hidden){
            $where = array('deleted' => 0);
        }else{
            $where = array('deleted' => 0,'hidden' => 0);    
        }
        $w = array();
        switch ($which_page){
            case 'edit_mailinglists':
            $w[] = array('member_filter_id' => 0);
            break;
        }
        
        
        $w[] = $where;
        $c->where($w);
        
        $c->groupby('type');
        */
        if (isset($_GET['types'])){
            $types = explode(',',$_GET['types']);
            $c->where(array('type:IN' => $types));
        }
        
        if (isset($_GET['start']) && isset($_GET['end'])){
            $start = $this->getProperty('start');
            $end = $this->getProperty('end');
            $c->where(array('date_end:>=' => $start));
            $c->where(array('date:<=' => $end));

        } elseif (isset($_GET['start'])) {
            $start = $this->getProperty('start');
            $c->where(array('date:>=' => $start));
        } else {
            $date = strftime('%Y-%m-%d 00:00:00');
            $c->where(array('date:>=' => $date));
        }
        //$c->prepare();echo $c->toSql();
        return $c;
        
    }
    /*
    protected function prepareListObject(xPDOObject $object) {
        $type = array();
        $type['label'] = $object->get('type');
        $type['name'] = $object->get('type');
        return $type;
    } 
    */   

}
