




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>wout/svg.filter.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="wout/svg.filter.js" name="twitter:title" /><meta content="svg.filter.js - A plugin for svg.js adding svg filters" name="twitter:description" /><meta content="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=400" property="og:image" /><meta content="wout/svg.filter.js" property="og:title" /><meta content="https://github.com/wout/svg.filter.js" property="og:url" /><meta content="svg.filter.js - A plugin for svg.js adding svg filters" property="og:description" />

    <meta name="hostname" content="github-fe130-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="42394CB1:0B67:15B4DC7:5320B164" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ec/ujKImdn6mLw6hbvLrlIic4UV2ATslVsePez68zbU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-adcf123587b068f65ee2420a9a7988231694ba13.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-b7ecc338341c2a831661314bd48d278acb4a4cb6.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-9acb89add4e173259bb0e9e81d36276a93db7af4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-84dfe559a8b26ed0fb061c21e309fed540afdb95.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="bcc46e89eeae9c5cf0729277434da1b9">

      
  <meta name="description" content="svg.filter.js - A plugin for svg.js adding svg filters" />

  <meta content="107324" name="octolytics-dimension-user_id" /><meta content="wout" name="octolytics-dimension-user_login" /><meta content="11342857" name="octolytics-dimension-repository_id" /><meta content="wout/svg.filter.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11342857" name="octolytics-dimension-repository_network_root_id" /><meta content="wout/svg.filter.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/wout/svg.filter.js/commits/master.atom" rel="alternate" title="Recent Commits to svg.filter.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fwout%2Fsvg.filter.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="wout/svg.filter.js"
      data-branch="master"
      data-sha="6204e83e21874a688979881ba3fe6e511880ef39"
  >

    <input type="hidden" name="nwo" value="wout/svg.filter.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fwout%2Fsvg.filter.js"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/wout/svg.filter.js/stargazers">
      56
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fwout%2Fsvg.filter.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/wout/svg.filter.js/network" class="social-count">
        9
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/wout" class="url fn" itemprop="url" rel="author"><span itemprop="title">wout</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/wout/svg.filter.js" class="js-current-repository js-repo-home-link">svg.filter.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/wout/svg.filter.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /wout/svg.filter.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/wout/svg.filter.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /wout/svg.filter.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/wout/svg.filter.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /wout/svg.filter.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/wout/svg.filter.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /wout/svg.filter.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/wout/svg.filter.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /wout/svg.filter.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/wout/svg.filter.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /wout/svg.filter.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/wout/svg.filter.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/wout/svg.filter.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/wout/svg.filter.js" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/wout/svg.filter.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/wout/svg.filter.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download wout/svg.filter.js as a zip file"
                   title="Download wout/svg.filter.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description js-details-show">
      <p>A plugin for svg.js adding svg filters</p>
    </div>



</div>

<div class="capped-box overall-summary ">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">

    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/wout/svg.filter.js/commits/master">
            <span class="num">
              <span class="octicon octicon-history"></span>
              9
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/wout/svg.filter.js/branches">
          <span class="num">
            <span class="octicon octicon-git-branch"></span>
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/wout/svg.filter.js/releases">
          <span class="num">
            <span class="octicon octicon-tag"></span>
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/wout/svg.filter.js/graphs/contributors">
    <span class="num">
      <span class="octicon octicon-organization"></span>
      1
    </span>
    contributor
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/wout/svg.filter.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f15501;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">93.9%</span>
              </a>
          </li>
          <li>
              <a href="/wout/svg.filter.js/search?l=css">
                <span class="color-block language-color" style="background-color:#1f085e;"></span>
                <span class="lang">CSS</span>
                <span class="percent">6.1%</span>
              </a>
          </li>
        </ol>
      </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#1f085e">
  <span class="language-color" style="width:93.9%; background-color:#f15501;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:6.1%; background-color:#1f085e;" itemprop="keywords">CSS</span>
    </a>
  </div>



<div class="file-navigation in-mid-page">
    <a href="/wout/svg.filter.js/compare" aria-label="Compare, review, create a pull request" class="minibutton compact primary tooltipped tooltipped-s" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/wout/svg.filter.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->


  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/wout/svg.filter.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">svg.filter.js</span></a></span></span><span class="separator"> / </span><form action="/login?return_to=%2Fwout%2Fsvg.filter.js" aria-label="Sign in to make or propose changes" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Sign in to make or propose changes" class="js-new-blob-submit octicon octicon-file-add" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



<a href="/wout/svg.filter.js/find/master"
  data-hotkey="t" class="js-show-file-finder" style="display:none" data-pjax>Show File Finder</a>
<div class="bubble files-bubble">

  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/wout/svg.filter.js/commit/627de86bf0d46a0e8bdc1fea646979b86493fb84" class="message" data-pjax="true" title="Fix for filters on groups and nested elements">Fix for filters on groups and nested elements</a>
        
    </p>
    <div class="commit-meta">
      <span aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="627de86bf0d46a0e8bdc1fea646979b86493fb84" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
      <a href="/wout/svg.filter.js/commit/627de86bf0d46a0e8bdc1fea646979b86493fb84" class="sha-block" data-pjax>latest commit <span class="sha">627de86bf0</span></a>

      <div class="authorship">
        <img alt="Wout Fierens" class="gravatar js-avatar" data-user="107324" height="20" src="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=140" width="20" />
        <span class="author-name"><a href="/wout" data-skip-pjax="true" rel="author">wout</a></span>
        authored <time class="js-relative-date updated" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-22T19:40:20+01:00" title="2014-01-22 18:40:20">January 22, 2014</time>

      </div>
    </div>
  </div>

  <table class="files" data-pjax>

    
<tbody class=""
  data-url="/wout/svg.filter.js/file-list/master">
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/tree/master/spec" class="js-directory-link" id="b979c2934ac0b4ba3f08dabfdd1b2299-84282efdc3ec15ca7771e8151cd022a99b3625a9" title="spec">spec</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/commit/1b5f17d33c659855a27ecf575c0f35bcb49b150b" class="message" data-pjax="true" title="Updated docs">Updated docs</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-16T14:30:28+01:00" title="2014-01-16 13:30:28">January 16, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-ac7fa9da10b160c14fc70ca27ea7a5b6a79f5363" title=".gitignore">.gitignore</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/commit/b183e4c61e1218d3b1d4cce181fc9efb2b107392" class="message" data-pjax="true" title="Initial commit">Initial commit</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-07-25T14:42:29+01:00" title="2013-07-25 13:42:29">July 25, 2013</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-fc13c4ff09c9f7de95444d765b63447e5ee9139b" title="README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/commit/7f188808cab5ef83003ba26fd7346d5a27417556" class="message" data-pjax="true" title="Syntax refinements">Syntax refinements</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-21T18:21:40+01:00" title="2014-01-21 17:21:40">January 21, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/blob/master/svg.filter.js" class="js-directory-link" id="8dd3e58e24c85f03dc83c9b51b27b85f-da7f0ca97a2fe96fda71e3248fff7b4b3523c241" title="svg.filter.js">svg.filter.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/commit/627de86bf0d46a0e8bdc1fea646979b86493fb84" class="message" data-pjax="true" title="Fix for filters on groups and nested elements">Fix for filters on groups and nested elements</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-22T19:40:20+01:00" title="2014-01-22 18:40:20">January 22, 2014</time></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/blob/master/svg.filter.min.js" class="js-directory-link" id="bac8edebbb3401973f4d390df2165270-13509b925130b3e545d90946e27d10a6d43f1c1d" title="svg.filter.min.js">svg.filter.min.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.filter.js/commit/627de86bf0d46a0e8bdc1fea646979b86493fb84" class="message" data-pjax="true" title="Fix for filters on groups and nested elements">Fix for filters on groups and nested elements</a></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"><time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-01-22T19:40:20+01:00" title="2014-01-22 18:40:20">January 22, 2014</time></span></td>
    </tr>
</tbody>

  </table>
</div>

  <div id="readme" class="clearfix announce instapaper_body md">
    <span class="name">
      <span class="octicon octicon-book"></span>
      README.md
    </span>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="svgfilterjs" class="anchor" href="#svgfilterjs"><span class="octicon octicon-link"></span></a>svg.filter.js</h1>

<p>A plugin for <a href="http://svgjs.com">svg.js</a> adding filter functionality.</p>

<p>Svg.filter.js is licensed under the terms of the MIT License.</p>

<h2>
<a name="usage" class="anchor" href="#usage"><span class="octicon octicon-link"></span></a>Usage</h2>

<p>Include this plugin after including the svg.js library in your html document.</p>

<p>For a few visual examples look at the <a href="http://svgjs.com/filter">svg.js filter page</a>.</p>

<p>Here is how each filter effect on the example page is achieved.</p>

<h3>
<a name="original" class="anchor" href="#original"><span class="octicon octicon-link"></span></a>original</h3>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">image</span> <span class="o">=</span> <span class="nx">draw</span><span class="p">.</span><span class="nx">image</span><span class="p">(</span><span class="s1">'path/to/image.jpg'</span><span class="p">).</span><span class="nx">size</span><span class="p">(</span><span class="mi">300</span><span class="p">,</span> <span class="mi">300</span><span class="p">)</span>
</pre></div>

<h3>
<a name="gaussian-blur" class="anchor" href="#gaussian-blur"><span class="octicon octicon-link"></span></a>gaussian blur</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">gaussianBlur</span><span class="p">(</span><span class="mi">30</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="horizontal-blur" class="anchor" href="#horizontal-blur"><span class="octicon octicon-link"></span></a>horizontal blur</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">gaussianBlur</span><span class="p">(</span><span class="mi">30</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="desaturate" class="anchor" href="#desaturate"><span class="octicon octicon-link"></span></a>desaturate</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">colorMatrix</span><span class="p">(</span><span class="s1">'saturate'</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="contrast" class="anchor" href="#contrast"><span class="octicon octicon-link"></span></a>contrast</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">var</span> <span class="nx">amount</span> <span class="o">=</span> <span class="mf">1.5</span>

  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">rgb</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'linear'</span><span class="p">,</span> <span class="nx">slope</span><span class="o">:</span> <span class="nx">amount</span><span class="p">,</span> <span class="nx">intercept</span><span class="o">:</span> <span class="o">-</span><span class="p">(</span><span class="mf">0.3</span> <span class="o">*</span> <span class="nx">amount</span><span class="p">)</span> <span class="o">+</span> <span class="mf">0.3</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="sepiatone" class="anchor" href="#sepiatone"><span class="octicon octicon-link"></span></a>sepiatone</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">colorMatrix</span><span class="p">(</span><span class="s1">'matrix'</span><span class="p">,</span> <span class="p">[</span> <span class="p">.</span><span class="mi">343</span><span class="p">,</span> <span class="p">.</span><span class="mi">669</span><span class="p">,</span> <span class="p">.</span><span class="mi">119</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span> 
                            <span class="p">,</span> <span class="p">.</span><span class="mi">249</span><span class="p">,</span> <span class="p">.</span><span class="mi">626</span><span class="p">,</span> <span class="p">.</span><span class="mi">130</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span>
                            <span class="p">,</span> <span class="p">.</span><span class="mi">172</span><span class="p">,</span> <span class="p">.</span><span class="mi">334</span><span class="p">,</span> <span class="p">.</span><span class="mi">111</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span>
                            <span class="p">,</span> <span class="p">.</span><span class="mi">000</span><span class="p">,</span> <span class="p">.</span><span class="mi">000</span><span class="p">,</span> <span class="p">.</span><span class="mi">000</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span> <span class="p">])</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="hue-rotate-180" class="anchor" href="#hue-rotate-180"><span class="octicon octicon-link"></span></a>hue rotate 180</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">colorMatrix</span><span class="p">(</span><span class="s1">'hueRotate'</span><span class="p">,</span> <span class="mi">180</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="luminance-to-alpha" class="anchor" href="#luminance-to-alpha"><span class="octicon octicon-link"></span></a>luminance to alpha</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">colorMatrix</span><span class="p">(</span><span class="s1">'luminanceToAlpha'</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="colorize" class="anchor" href="#colorize"><span class="octicon octicon-link"></span></a>colorize</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">colorMatrix</span><span class="p">(</span><span class="s1">'matrix'</span><span class="p">,</span> <span class="p">[</span> <span class="mf">1.0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span>
                            <span class="p">,</span> <span class="mi">0</span><span class="p">,</span>   <span class="mf">0.2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span> 
                            <span class="p">,</span> <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span><span class="p">,</span>   <span class="mf">0.2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span> 
                            <span class="p">,</span> <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span><span class="p">,</span>   <span class="mi">0</span><span class="p">,</span>   <span class="mf">1.0</span><span class="p">,</span> <span class="mi">0</span> <span class="p">])</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="posterize" class="anchor" href="#posterize"><span class="octicon octicon-link"></span></a>posterize</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">rgb</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'discrete'</span><span class="p">,</span> <span class="nx">tableValues</span><span class="o">:</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">,</span> <span class="mf">0.4</span><span class="p">,</span> <span class="mf">0.6</span><span class="p">,</span> <span class="mf">0.8</span><span class="p">,</span> <span class="mi">1</span><span class="p">]</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="darken" class="anchor" href="#darken"><span class="octicon octicon-link"></span></a>darken</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">rgb</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'linear'</span><span class="p">,</span> <span class="nx">slope</span><span class="o">:</span> <span class="mf">0.2</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="lighten" class="anchor" href="#lighten"><span class="octicon octicon-link"></span></a>lighten</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">rgb</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'linear'</span><span class="p">,</span> <span class="nx">slope</span><span class="o">:</span> <span class="mf">1.5</span><span class="p">,</span> <span class="nx">intercept</span><span class="o">:</span> <span class="mf">0.2</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="invert" class="anchor" href="#invert"><span class="octicon octicon-link"></span></a>invert</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">rgb</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'table'</span><span class="p">,</span> <span class="nx">tableValues</span><span class="o">:</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="gamma-correct-1" class="anchor" href="#gamma-correct-1"><span class="octicon octicon-link"></span></a>gamma correct 1</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">g</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'gamma'</span><span class="p">,</span> <span class="nx">amplitude</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">exponent</span><span class="o">:</span> <span class="mf">0.5</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="gamma-correct-2" class="anchor" href="#gamma-correct-2"><span class="octicon octicon-link"></span></a>gamma correct 2</h3>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">add</span><span class="p">.</span><span class="nx">componentTransfer</span><span class="p">({</span>
    <span class="nx">g</span><span class="o">:</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">'gamma'</span><span class="p">,</span> <span class="nx">amplitude</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">exponent</span><span class="o">:</span> <span class="mf">0.5</span><span class="p">,</span> <span class="nx">offset</span><span class="o">:</span> <span class="o">-</span><span class="mf">0.1</span> <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre></div>

<h3>
<a name="drop-shadow" class="anchor" href="#drop-shadow"><span class="octicon octicon-link"></span></a>drop shadow</h3>

<p>You will notice that all the effect descriptions have a drop shadow. Here is how this drop shadow can be achieved:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="nx">draw</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="s1">'SVG text with drop shadow'</span><span class="p">).</span><span class="nx">fill</span><span class="p">(</span><span class="s1">'#fff'</span><span class="p">)</span>

<span class="nx">text</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">var</span> <span class="nx">blur</span> <span class="o">=</span> <span class="nx">add</span><span class="p">.</span><span class="nx">offset</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">).</span><span class="k">in</span><span class="p">(</span><span class="nx">add</span><span class="p">.</span><span class="nx">sourceAlpha</span><span class="p">).</span><span class="nx">gaussianBlur</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>

  <span class="nx">add</span><span class="p">.</span><span class="nx">blend</span><span class="p">(</span><span class="nx">add</span><span class="p">.</span><span class="nx">source</span><span class="p">,</span> <span class="nx">blur</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<p>This technique can be achieved on any other shape of course:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">rect</span> <span class="o">=</span> <span class="nx">draw</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="mi">100</span><span class="p">,</span><span class="mi">100</span><span class="p">).</span><span class="nx">fill</span><span class="p">(</span><span class="s1">'#f09'</span><span class="p">).</span><span class="nx">stroke</span><span class="p">({</span> <span class="nx">width</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">color</span><span class="o">:</span> <span class="s1">'#0f9'</span> <span class="p">}).</span><span class="nx">move</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span>

<span class="nx">rect</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">var</span> <span class="nx">blur</span> <span class="o">=</span> <span class="nx">add</span><span class="p">.</span><span class="nx">offset</span><span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">).</span><span class="k">in</span><span class="p">(</span><span class="nx">add</span><span class="p">.</span><span class="nx">sourceAlpha</span><span class="p">).</span><span class="nx">gaussianBlur</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>

  <span class="nx">add</span><span class="p">.</span><span class="nx">blend</span><span class="p">(</span><span class="nx">add</span><span class="p">.</span><span class="nx">source</span><span class="p">,</span> <span class="nx">blur</span><span class="p">)</span>

  <span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="p">(</span><span class="s1">'200%'</span><span class="p">,</span><span class="s1">'200%'</span><span class="p">).</span><span class="nx">move</span><span class="p">(</span><span class="s1">'-50%'</span><span class="p">,</span> <span class="s1">'-50%'</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<p>If the drop shadow should get the colour of the shape so it appears like coloured glass:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">rect</span> <span class="o">=</span> <span class="nx">draw</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="mi">100</span><span class="p">,</span><span class="mi">100</span><span class="p">).</span><span class="nx">fill</span><span class="p">(</span><span class="s1">'#f09'</span><span class="p">).</span><span class="nx">stroke</span><span class="p">({</span> <span class="nx">width</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">color</span><span class="o">:</span> <span class="s1">'#0f9'</span> <span class="p">}).</span><span class="nx">move</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span>

<span class="nx">rect</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="kd">var</span> <span class="nx">blur</span> <span class="o">=</span> <span class="nx">add</span><span class="p">.</span><span class="nx">offset</span><span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">20</span><span class="p">).</span><span class="nx">gaussianBlur</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>

  <span class="nx">add</span><span class="p">.</span><span class="nx">blend</span><span class="p">(</span><span class="nx">add</span><span class="p">.</span><span class="nx">source</span><span class="p">,</span> <span class="nx">blur</span><span class="p">)</span>

  <span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="p">(</span><span class="s1">'200%'</span><span class="p">,</span><span class="s1">'200%'</span><span class="p">).</span><span class="nx">move</span><span class="p">(</span><span class="s1">'-50%'</span><span class="p">,</span> <span class="s1">'-50%'</span><span class="p">)</span>
<span class="p">})</span>
</pre></div>

<h2>
<a name="furthermore" class="anchor" href="#furthermore"><span class="octicon octicon-link"></span></a>Furthermore</h2>

<p>Some more features you should know about.</p>

<h3>
<a name="unfilter" class="anchor" href="#unfilter"><span class="octicon octicon-link"></span></a>unfilter</h3>

<p>The <code>unfilter</code> method removes the filter attribute from the node:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">unfilter</span><span class="p">()</span>
</pre></div>

<p>This will return the element to its original state but will retain the filter in the defs node. If the filter node should be removed as well, simply pass the <code>true</code> as the first argument:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">unfilter</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span>
</pre></div>

<h3>
<a name="referencing-the-filter-node" class="anchor" href="#referencing-the-filter-node"><span class="octicon octicon-link"></span></a>referencing the filter node</h3>

<p>An internal reference to the filter node is made in the element:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">image</span><span class="p">.</span><span class="nx">filterer</span>
</pre></div>

<p>This can also be very useful to reuse an existing filter on various elements:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">otherImage</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">filterer</span><span class="p">)</span>
</pre></div>

<h3>
<a name="animating-filter-values" class="anchor" href="#animating-filter-values"><span class="octicon octicon-link"></span></a>Animating filter values</h3>

<p>Every filter value can be animated as well:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">hueRotate</span>

<span class="nx">image</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">add</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">hueRotate</span> <span class="o">=</span> <span class="nx">add</span><span class="p">.</span><span class="nx">colorMatrix</span><span class="p">(</span><span class="s1">'hueRotate'</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
<span class="p">})</span>

<span class="nx">hueRotate</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span><span class="mi">3000</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'values'</span><span class="p">,</span> <span class="mi">360</span><span class="p">)</span>
</pre></div>

<h2>
<a name="important" class="anchor" href="#important"><span class="octicon octicon-link"></span></a>Important</h2>

<p>This plugin is still under development and does not yet cover the whole range of svg filter capabilities.</p></article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05919s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

