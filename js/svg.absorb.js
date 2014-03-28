




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>wout/svg.absorb.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="wout/svg.absorb.js" name="twitter:title" /><meta content="svg.absorb.js - A plugin for the svg.js library adding the ability to absorb an existing svg into the dynamic svg.js structure" name="twitter:description" /><meta content="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=400" property="og:image" /><meta content="wout/svg.absorb.js" property="og:title" /><meta content="https://github.com/wout/svg.absorb.js" property="og:url" /><meta content="svg.absorb.js - A plugin for the svg.js library adding the ability to absorb an existing svg into the dynamic svg.js structure" property="og:description" />

    <meta name="hostname" content="github-fe140-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="42394CB1:5538:212C7D0:5320B143" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="6cH1oJ62utcHac0Ukj3sb2ZbfnJI9w/ElwkxaCuCk1A=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-adcf123587b068f65ee2420a9a7988231694ba13.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-b7ecc338341c2a831661314bd48d278acb4a4cb6.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-9acb89add4e173259bb0e9e81d36276a93db7af4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-84dfe559a8b26ed0fb061c21e309fed540afdb95.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="bcc46e89eeae9c5cf0729277434da1b9">

      
  <meta name="description" content="svg.absorb.js - A plugin for the svg.js library adding the ability to absorb an existing svg into the dynamic svg.js structure" />

  <meta content="107324" name="octolytics-dimension-user_id" /><meta content="wout" name="octolytics-dimension-user_login" /><meta content="17033007" name="octolytics-dimension-repository_id" /><meta content="wout/svg.absorb.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="17033007" name="octolytics-dimension-repository_network_root_id" /><meta content="wout/svg.absorb.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/wout/svg.absorb.js/commits/master.atom" rel="alternate" title="Recent Commits to svg.absorb.js:master" type="application/atom+xml" />

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
      <a class="button signin" href="/login?return_to=%2Fwout%2Fsvg.absorb.js">Sign in</a>
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
    
    
      data-repo="wout/svg.absorb.js"
      data-branch="master"
      data-sha="47c39c76ae44d84c0c01d549ea9e112e24dae68a"
  >

    <input type="hidden" name="nwo" value="wout/svg.absorb.js" />

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
    <a href="/login?return_to=%2Fwout%2Fsvg.absorb.js"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/wout/svg.absorb.js/stargazers">
      0
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fwout%2Fsvg.absorb.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/wout/svg.absorb.js/network" class="social-count">
        0
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
          <strong><a href="/wout/svg.absorb.js" class="js-current-repository js-repo-home-link">svg.absorb.js</a></strong>

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
        <a href="/wout/svg.absorb.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /wout/svg.absorb.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/wout/svg.absorb.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /wout/svg.absorb.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/wout/svg.absorb.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /wout/svg.absorb.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/wout/svg.absorb.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /wout/svg.absorb.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/wout/svg.absorb.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /wout/svg.absorb.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/wout/svg.absorb.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /wout/svg.absorb.js/network">
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
           value="https://github.com/wout/svg.absorb.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/wout/svg.absorb.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/wout/svg.absorb.js" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/wout/svg.absorb.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
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



                <a href="/wout/svg.absorb.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download wout/svg.absorb.js as a zip file"
                   title="Download wout/svg.absorb.js as a zip file"
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
      <p>A plugin for the svg.js library adding the ability to absorb an existing svg into the dynamic svg.js structure</p>
    </div>



</div>

<div class="capped-box overall-summary ">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">

    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/wout/svg.absorb.js/commits/master">
            <span class="num">
              <span class="octicon octicon-history"></span>
              1
            </span>
            commit
        </a>
      </li>
      <li>
        <a data-pjax href="/wout/svg.absorb.js/branches">
          <span class="num">
            <span class="octicon octicon-git-branch"></span>
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/wout/svg.absorb.js/releases">
          <span class="num">
            <span class="octicon octicon-tag"></span>
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
          <a href="/wout/svg.absorb.js/graphs/contributors" class="js-deferred-content" data-url="/wout/svg.absorb.js/contributors_size">
            <span class="num">
              <span class="octicon octicon-organization"></span>
            </span>
            Fetching contributors
          </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/wout/svg.absorb.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f15501;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">93.7%</span>
              </a>
          </li>
          <li>
              <a href="/wout/svg.absorb.js/search?l=css">
                <span class="color-block language-color" style="background-color:#1f085e;"></span>
                <span class="lang">CSS</span>
                <span class="percent">6.3%</span>
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
  <span class="language-color" style="width:93.7%; background-color:#f15501;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:6.3%; background-color:#1f085e;" itemprop="keywords">CSS</span>
    </a>
  </div>



<div class="file-navigation in-mid-page">
    <a href="/wout/svg.absorb.js/compare" aria-label="Compare, review, create a pull request" class="minibutton compact primary tooltipped tooltipped-s" aria-label="Compare &amp; review" data-pjax>
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
              <a href="/wout/svg.absorb.js/tree/master"
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


  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/wout/svg.absorb.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">svg.absorb.js</span></a></span></span><span class="separator"> / </span><form action="/login?return_to=%2Fwout%2Fsvg.absorb.js" aria-label="Sign in to make or propose changes" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Sign in to make or propose changes" class="js-new-blob-submit octicon octicon-file-add" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



<a href="/wout/svg.absorb.js/find/master"
  data-hotkey="t" class="js-show-file-finder" style="display:none" data-pjax>Show File Finder</a>
<div class="bubble files-bubble">

  
    <div class="commit commit-loader commit-tease js-details-container js-deferred-content" data-url="/wout/svg.absorb.js/tree-commit/master">
      <p class="commit-title blank">
        Fetching latest commit…
      </p>
      <div class="commit-meta">
        <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
        <p class="loader-error">Cannot retrieve the latest commit at this time</p>
      </div>
    </div>

  <table class="files" data-pjax>

    
<tbody class="js-deferred-content"
  data-url="/wout/svg.absorb.js/file-list/master">
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/tree/master/spec" class="js-directory-link" id="b979c2934ac0b4ba3f08dabfdd1b2299-6ac7cd168adfef4b096806bfeaf3b521d3029ebe" title="spec">spec</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-de8e876cf660396f4ce1d3b24faa5396e795dc0b" title="README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-654ceaa9319c3ca0e8c90df1d05b61dc7d818179" title="bower.json">bower.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/blob/master/component.json" class="js-directory-link" id="162d38b326426c84ac91e51f931105bb-2902bf78635172d025616cc8b09c9d1f10249402" title="component.json">component.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-1ab6e8211584bba84eb5f28163bcc229b996737f" title="package.json">package.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/blob/master/svg.absorb.js" class="js-directory-link" id="494ecb80ec8c89c1910c2e108688be3b-6ff3eb2cc4f30d7481daf39e8071d308dbe393bb" title="svg.absorb.js">svg.absorb.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.absorb.js/blob/master/svg.absorb.min.js" class="js-directory-link" id="4a162fa0a93c435bff96fbea0a5246cf-4a05b25648897ebf3e92f6e80c10bb97dc995e0f" title="svg.absorb.min.js">svg.absorb.min.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target"></span>
      </td>
      <td class="age"><span class="css-truncate css-truncate-target"></span></td>
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
<a name="svgabsorbjs" class="anchor" href="#svgabsorbjs"><span class="octicon octicon-link"></span></a>svg.absorb.js</h1>

<p>This is a plugin for the <a href="http://svgjs.com">svg.js</a> library adding the ability to absorb existing svg's just like images.</p>

<p>Svg.absorb.js is licensed under the terms of the MIT License.</p>

<h2>
<a name="introduction" class="anchor" href="#introduction"><span class="octicon octicon-link"></span></a>Introduction</h2>

<p>This plugin does nothing more than swallow raw svg or an existing inline svg to display in a container instance of svg.js. What happens inside the absorbed svg, stays inside the absorbed svg. The absorbed svg elements are dead matter to svg.js. This plugin should be used to visualise svg content withing a svg.js instance without the need to manipulate absorbed svg.</p>

<h2>
<a name="usage" class="anchor" href="#usage"><span class="octicon octicon-link"></span></a>Usage</h2>

<p>Include this plugin after including the svg.js library in your html document.</p>

<p>To absorb raw svg code:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">draw</span><span class="p">.</span><span class="nx">absorb</span><span class="p">(</span><span class="s1">'&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --&gt;&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve"&gt;&lt;line id="line1234" fill="none" stroke="#FF7BAC" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" x1="138.682" y1="250" x2="293.248" y2="95.433"/&gt;&lt;rect id="rect1235" x="22.48" y="19.078" fill="#F7931E" stroke="#C1272D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="94.972" height="94.972"/&gt;&lt;path id="path1236" opacity="0.5" fill="#29ABE2" d="M189.519,131.983c0,5.523-4.477,10-10,10H92.257c-5.523,0-10-4.477-10-10V53.659 c0-5.523,4.477-10,10-10h87.262c5.523,0,10,4.477,10,10V131.983z"/&gt;&lt;circle id="circle1237" opacity="0.8" fill="#8CC63F" cx="201.603" cy="159.508" r="69.067"/&gt;&lt;polygon id="polygon1238" fill="none" stroke="#8C6239" stroke-width="20" stroke-linecap="round" stroke-miterlimit="10" points="286.331,287.025  227.883,271.365 212.221,212.915 255.009,170.127 313.459,185.789 329.119,244.237 "/&gt;&lt;/svg&gt;'</span><span class="p">)</span>
</pre></div>

<p>this works also for a fragment of svg code:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">draw</span><span class="p">.</span><span class="nx">absorb</span><span class="p">(</span><span class="s1">'&lt;circle id="circle1237" opacity="0.8" fill="#8CC63F" cx="201.603" cy="159.508" r="69.067"/&gt;'</span><span class="p">)</span>
</pre></div>

<p>To absorb an existing inline svg:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">draw</span><span class="p">.</span><span class="nx">absorb</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span>
</pre></div></article>
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
      <li>&copy; 2014 <span title="0.05387s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

