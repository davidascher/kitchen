var secrets = require('../config/secrets');
var User = require('../models/User');
var querystring = require('querystring');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var _ = require('underscore');
var Github = require('github-api');
var Component = require('../models/Component');

/**
 * GET /api
 * List of API examples.
 */

exports.getApi = function(req, res) {
  res.render('api/index', {
    title: 'API Browser'
  });
};

/**
 * GET /api/github
 * GitHub API Example.
 */
exports.getGithub = function(req, res) {
  var token = _.findWhere(req.user.tokens, { kind: 'github' });
  var github = new Github({ token: token.accessToken });
  var repo = github.getRepo('sahat', 'requirejs-library');
  repo.show(function(err, repo) {
    res.render('api/github', {
      title: 'GitHub API',
      repo: repo
    });
  });
};

exports.favorite = function(req, res) {
  Component.findById(req.body.componentId, function(err, foundComponent) {
    if (! foundComponent) {
      return res.json(500, "Couldn't find component with id: " + req.body.componentId);
    }
    fans = foundComponent.fans;
    var fave = req.body.favorite == 'true';
    var user = req.body.userId;
    if (fave) {
      if (user in fans) return res.json(200, "already was favorite");
      fans.push(user);
    } else {
      var index = fans.indexOf(user);
      if (index == -1) {
        return res.json(200, "already was not favorite");
      }
      fans.splice(index, 1);
    }
    Component.update({_id : req.body.componentId},
      {$set: {fans: fans}}, {},
      function(err,obj){
        if(err){
          return res.json(500, {error: 'Fan list was not renamed due to ' + err});
        } else {
          return res.json(200, {message: 'Fan list updated successfully'});
        }
      }
    );
  });
}
