@echo off
cd "C:\Program Files\MongoDB\bin"
start mongod.exe
timeout 4
start mongo.exe
exit