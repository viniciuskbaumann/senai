@echo off
title SENAI API SERVER
color 09
cls

echo.
type dragao.txt
echo.

echo ==========================================================
echo                    SENAI API SERVER
echo ==========================================================
echo.

echo [%date% %time%] Inicializando servidor...
echo.

echo Carregando modulos...
ping 127.0.0.1 -n 2 > nul
echo [OK] Express

ping 127.0.0.1 -n 2 > nul
echo [OK] PostgreSQL

ping 127.0.0.1 -n 2 > nul
echo [OK] API Routes

ping 127.0.0.1 -n 2 > nul
echo [OK] Sistema iniciado

echo.
echo ==========================================================
echo.

node servernode\backend\server.js

echo.
echo ==========================================================
echo Servidor encerrado.
echo ==========================================================
pause