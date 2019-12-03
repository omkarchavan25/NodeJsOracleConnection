var express = require('express');
var session = require('express-session');

var app = express();
var passport = require('passport');
var LocatStrategy = require('passport-local').Strategy;
var multer = require('multer');
var flash = require('flash');
