<?php

include 'BaseController.php';

class MyControllerMailinglistnames extends BaseController {
    public $classKey = 'fbuchMailinglistNames';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'ASC';
    

    public function beforeDelete() {
        throw new Exception('Unauthorized', 401);
    }
    
    public function afterPut(){
        $this->updateDatesMailinglistNames();    
    }
    
    public function afterPost(){
        $this->updateDatesMailinglistNames();       
    }

    public function updateDatesMailinglistNames(){
        $action = $this->getProperty('action');
        switch ($action) {
            case 'subscribe':
            case 'unsubscribe':
                $this->modx->fbuch->updateDatesMailinglistNames($this->getProperty('list_id'));
        }        
    }

    public function beforePut() {

        $this->object->set('editedby', $this->modx->user->get('id'));
        $this->object->set('editedon', strftime('%Y-%m-%d %H:%M:%S'));

        $action = $this->getProperty('action');
        switch ($action) {
            case 'subscribe':
                return $this->subscribe();
                break;
            case 'unsubscribe':
                return $this->unsubscribe();
                break;
        }

        if ($this->modx->hasPermission('fbuch_edit_mailinglistnames')) {


        } else {
            throw new Exception('Unauthorized', 401);
        }


        return !$this->hasErrors();
    }

    public function subscribe() {

        if ($fbuchUser = $this->getCurrentFbuchUser()) {
            $this->object->set('member_id', $fbuchUser->get('id'));
            $this->object->set('subscribed', 1);
            $this->object->set('unsubscribed', 0);
            $this->object->set('subscribedon', strftime('%Y-%m-%d %H:%M:%S'));

        } else {
            throw new Exception('Unauthorized', 401);
        }
        return !$this->hasErrors();

    }

    public function unsubscribe() {

        if ($fbuchUser = $this->getCurrentFbuchUser()) {
            $this->object->set('member_id', $fbuchUser->get('id'));
            $this->object->set('subscribed', 0);
            $this->object->set('unsubscribed', 1);
            $this->object->set('unsubscribedon', strftime('%Y-%m-%d %H:%M:%S'));

        } else {
            throw new Exception('Unauthorized', 401);
        }

        return !$this->hasErrors();

    }

    public function beforePost() {

        $this->object->set('createdby', $this->modx->user->get('id'));
        $this->object->set('createdon', strftime('%Y-%m-%d %H:%M:%S'));

        $action = $this->getProperty('action');
        switch ($action) {
            case 'subscribe':
                return $this->subscribe();
                break;
            case 'unsubscribe':
                return $this->unsubscribe();
                break;
        }

        if ($this->modx->hasPermission('fbuch_create_mailinglistnames')) {

        } else {
            throw new Exception('Unauthorized', 401);
        }


        return !$this->hasErrors();
    }


    public function verifyAuthentication() {
        if ($fbuchUser = $this->getCurrentFbuchUser()) {
            return true;
        }
        return false;
    }

    protected function prepareListQueryBeforeCount(xPDOQuery $c) {
        $returntype = $this->getProperty('returntype');
        $list_id = $this->getProperty('list_id');
        $where = array('list_id' => $list_id);
        /*
        $datewhere = array();
        switch ($returntype) {
        case 'open':
        $this->setProperty('dir','ASC');
        $where['km'] = 0;
        $datewhere['date:<='] = strftime('%Y-%m-%d 23:59:59');
        $datewhere['start_time:<='] = strftime('%H:%M');
        $datewhere['OR:date:<'] = strftime('%Y-%m-%d 00:00:00');
        break;
        case 'sheduled':
        $this->setProperty('dir','ASC');
        $where['km'] = 0;
        $where['date:>='] = strftime('%Y-%m-%d 00:00:00');
        
        $datewhere['date:>='] = strftime('%Y-%m-%d 00:00:00');
        $datewhere['start_time:>'] = strftime('%H:%M');
        $datewhere['OR:date:>'] = strftime('%Y-%m-%d 23:59:00');                
        
        break;                
        case 'finished':
        $this->setProperty('dir','DESC');
        $where['km:>'] = 0;
        break;                
        } 
        */


        $joins = '[{"alias":"Member","selectfields":"id,name,firstname,member_status"}]';

        $this->modx->migx->prepareJoins($this->classKey, json_decode($joins, 1), $c);

        $w = array();
        $w[] = $where;
        $c->where($w);

        //$c->prepare();echo $c->toSql();
        return $c;
    }

    protected function prepareListObject(xPDOObject $object) {

        $objectArray = $object->toArray();

        return $objectArray;
    }

}
