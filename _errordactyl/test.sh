#!/bin/bash
deno run --allow-net ./server/server.ts &
DENO_PID=$!
sleep .5
NC='\0033[0m'
    BPURPLE='\033[1;35m'
    BGREEN='\033[1;32m'
        
GET0=$(curl -s localhost:3000/)
        echo -e "${BPURPLE}GET to '/': ${NC}$GET0"
        
        
GET1=$(curl -s localhost:3000/:_id)
        echo -e "${BPURPLE}GET to '/:_id': ${NC}$GET1"
        
          
POST0=$(curl -s -X POST -d '{}' localhost:3000/create)
          echo -e "${BPURPLE}POST to '/create': ${NC}$POST0"
        
          
DELETE0=$(curl -s -X DELETE -d 'undefined' localhost:3000/:_id)
          echo -e "${BPURPLE}DELETE to '/:_id': ${NC}$DELETE0"
        
          
PATCH0=$(curl -s -X PATCH -d '{}' localhost:3000/:_id)
          echo -e "${BPURPLE}PATCH to '/:_id': ${NC}$PATCH0"
        
kill $DENO_PID