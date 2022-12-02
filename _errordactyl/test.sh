#!/bin/bash
deno run --allow-net ./server/server.ts &
DENO_PID=$!
sleep .5
            
GET0=$(curl -s localhost:3000/)
            echo "GET to '/': $GET0"
          
            
GET1=$(curl -s localhost:3000/books)
            echo "GET to '/books': $GET1"
          
            
POST0=$(curl -s -X POST -d '{"name":"tony"}' -H "Content-Type: application/json" localhost:3000/)
            echo "POST to '/': $POST0"
          
            
DEL0=$(curl -s -X DELETE localhost:3000/books/:id)
            echo "DELETE to '/books/:id': $DEL0"
          
curl -s -X PATCH[object Object]localhost:3000/books/:id
kill $DENO_PID