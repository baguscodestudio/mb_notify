# mb_notify
A simple notification script with multiple options

**Features**

Displays notifications one by one (queue) so they can be spammed
Simple and Beautiful UI (Credits to Material UI library for react)

**How to use**
Client Side
```
exports['mb_notify']:sendNotification(yourMessage, options)
```
Server Side
```
TriggerClientEvent('mb_notify:sendNotification', source, yourMessage, options)
```

## Examples
```
exports['mb_notify']:sendNotification('this is default bottom center')
exports['mb_notify']:sendNotification('this is error type top center', {type="error", vertical="top"})
exports['mb_notify']:sendNotification('this is info type and filled variant top right', {type="info", vertical="top", horizontal="right", variant="filled"})
exports['mb_notify']:sendNotification('this is warning type and outlined variant bottom right', {type="warning", horizontal="right", variant='outlined'})
exports['mb_notify']:sendNotification('this is default top left with duration 1 second', {vertical='top', horizontal='left', duration=1000})
exports['mb_notify']:sendNotification('this is default bottom left', {horizontal='left'})
```

## Options
1. Duration (*default 5000 ms*)
2. Types (*default success*, warning, info, and error)
3. Positions (*default bottom center*)
4. Notification variant (*default standard*, filled, and outlined)

# Preview
https://forum.cfx.re/uploads/default/original/4X/c/2/e/c2ed1110e67cadfec783977cacb80e3e48dab07a.jpeg

You can also use this as a reference on how to create react-fivem script, source code under notify folder.
Any suggestions are accepted!
