




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>wout/svg.shapes.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="wout/svg.shapes.js" name="twitter:title" /><meta content="svg.shapes.js - A shapes plugin for the svg.js library" name="twitter:description" /><meta content="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=400" property="og:image" /><meta content="wout/svg.shapes.js" property="og:title" /><meta content="https://github.com/wout/svg.shapes.js" property="og:url" /><meta content="svg.shapes.js - A shapes plugin for the svg.js library" property="og:description" />

    <meta name="hostname" content="github-fe131-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="42394CB1:5533:3E9BA0:5320B196" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ytYwZt6K0jW7G3MowJ+B+M2YfCIGwRbZppVEH2XEYAo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-adcf123587b068f65ee2420a9a7988231694ba13.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-b7ecc338341c2a831661314bd48d278acb4a4cb6.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-9acb89add4e173259bb0e9e81d36276a93db7af4.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-84dfe559a8b26ed0fb061c21e309fed540afdb95.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="bcc46e89eeae9c5cf0729277434da1b9">

      
  <meta name="description" content="svg.shapes.js - A shapes plugin for the svg.js library" />

  <meta content="107324" name="octolytics-dimension-user_id" /><meta content="wout" name="octolytics-dimension-user_login" /><meta content="7360543" name="octolytics-dimension-repository_id" /><meta content="wout/svg.shapes.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7360543" name="octolytics-dimension-repository_network_root_id" /><meta content="wout/svg.shapes.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/wout/svg.shapes.js/commits/master.atom" rel="alternate" title="Recent Commits to svg.shapes.js:master" type="application/atom+xml" />

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
      <a class="button signin" href="/login?return_to=%2Fwout%2Fsvg.shapes.js">Sign in</a>
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
    
    
      data-repo="wout/svg.shapes.js"
      data-branch="master"
      data-sha="5021948c50d3784d619f1575037e78a697999cd6"
  >

    <input type="hidden" name="nwo" value="wout/svg.shapes.js" />

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
    <a href="/login?return_to=%2Fwout%2Fsvg.shapes.js"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/wout/svg.shapes.js/stargazers">
      5
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fwout%2Fsvg.shapes.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/wout/svg.shapes.js/network" class="social-count">
        1
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
          <strong><a href="/wout/svg.shapes.js" class="js-current-repository js-repo-home-link">svg.shapes.js</a></strong>

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
        <a href="/wout/svg.shapes.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /wout/svg.shapes.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/wout/svg.shapes.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /wout/svg.shapes.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/wout/svg.shapes.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /wout/svg.shapes.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/wout/svg.shapes.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /wout/svg.shapes.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/wout/svg.shapes.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /wout/svg.shapes.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/wout/svg.shapes.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /wout/svg.shapes.js/network">
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
           value="https://github.com/wout/svg.shapes.js.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/wout/svg.shapes.js.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/wout/svg.shapes.js" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/wout/svg.shapes.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
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



                <a href="/wout/svg.shapes.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download wout/svg.shapes.js as a zip file"
                   title="Download wout/svg.shapes.js as a zip file"
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
      <p>A shapes plugin for the svg.js library</p>
    </div>



</div>

<div class="capped-box overall-summary ">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">

    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/wout/svg.shapes.js/commits/master">
            <span class="num">
              <span class="octicon octicon-history"></span>
              16
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/wout/svg.shapes.js/branches">
          <span class="num">
            <span class="octicon octicon-git-branch"></span>
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/wout/svg.shapes.js/releases">
          <span class="num">
            <span class="octicon octicon-tag"></span>
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
          <a href="/wout/svg.shapes.js/graphs/contributors" class="js-deferred-content" data-url="/wout/svg.shapes.js/contributors_size">
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
              <a href="/wout/svg.shapes.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f15501;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#f15501">
  <span class="language-color" style="width:100%; background-color:#f15501;" itemprop="keywords">JavaScript</span>
    </a>
  </div>



<div class="file-navigation in-mid-page">
    <a href="/wout/svg.shapes.js/compare" aria-label="Compare, review, create a pull request" class="minibutton compact primary tooltipped tooltipped-s" aria-label="Compare &amp; review" data-pjax>
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
              <a href="/wout/svg.shapes.js/tree/master"
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


  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/wout/svg.shapes.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">svg.shapes.js</span></a></span></span><span class="separator"> / </span><form action="/login?return_to=%2Fwout%2Fsvg.shapes.js" aria-label="Sign in to make or propose changes" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Sign in to make or propose changes" class="js-new-blob-submit octicon octicon-file-add" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



<a href="/wout/svg.shapes.js/find/master"
  data-hotkey="t" class="js-show-file-finder" style="display:none" data-pjax>Show File Finder</a>
<div class="bubble files-bubble">

  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/wout/svg.shapes.js/commit/dd33727ae0e000ee7fe453280ddb0c3a246ecc2f" class="message" data-pjax="true" title="Separated defaults">Separated defaults</a>
        
    </p>
    <div class="commit-meta">
      <span aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="dd33727ae0e000ee7fe453280ddb0c3a246ecc2f" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
      <a href="/wout/svg.shapes.js/commit/dd33727ae0e000ee7fe453280ddb0c3a246ecc2f" class="sha-block" data-pjax>latest commit <span class="sha">dd33727ae0</span></a>

      <div class="authorship">
        <img alt="Wout Fierens" class="gravatar js-avatar" data-user="107324" height="20" src="https://1.gravatar.com/avatar/41e0fbecabd51c72b570cff7f3a221b7?d=https%3A%2F%2Fidenticons.github.com%2F529c9e6297c31eca58f028753e79db5c.png&amp;r=x&amp;s=140" width="20" />
        <span class="author-name"><a href="/wout" data-skip-pjax="true" rel="author">wout</a></span>
        authored <time class="js-relative-date updated" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-08-05T09:01:22-07:00" title="2013-08-05 18:01:22">August 05, 2013</time>

      </div>
    </div>
  </div>

  <table class="files" data-pjax>

    
<tbody class="js-deferred-content"
  data-url="/wout/svg.shapes.js/file-list/master">
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="Octocat-spinner-32" class="spinner" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.shapes.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-c5fc6491096ac0cf2f099aa3f5946b3db6739c86" title="README.md">README.md</a></span>
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
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.shapes.js/blob/master/svg.shapes.js" class="js-directory-link" id="78c53ec961947b81d89f5da5db03a2e5-51f07f2ccf9ff756ae3cd824fd48164de52c8b79" title="svg.shapes.js">svg.shapes.js</a></span>
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
        <span class="css-truncate css-truncate-target"><a href="/wout/svg.shapes.js/blob/master/svg.shapes.min.js" class="js-directory-link" id="eff4bbab89cfc82d5418de0a562b2a83-16637e274163d2e0eb7653c8fababad8455c61e4" title="svg.shapes.min.js">svg.shapes.min.js</a></span>
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
<a name="svgshapesjs" class="anchor" href="#svgshapesjs"><span class="octicon octicon-link"></span></a>svg.shapes.js</h1>

<p>This is a plugin for the <a href="http://svgjs.com">svg.js</a> library to draw various shape types based on the built-in polygon method.</p>

<p>Svg.easing.js is licensed under the terms of the MIT License.</p>

<h2>
<a name="usage" class="anchor" href="#usage"><span class="octicon octicon-link"></span></a>Usage</h2>

<p>Include this plugin after including svg.js in your html document.</p>

<h3>
<a name="star" class="anchor" href="#star"><span class="octicon octicon-link"></span></a>Star</h3>

<p>Three parameters are required to draw a star, <code>inner</code> radius, <code>outer</code> radius and <code>spikes</code>:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">star</span> <span class="o">=</span> <span class="nx">draw</span><span class="p">.</span><span class="nx">polygon</span><span class="p">().</span><span class="nx">star</span><span class="p">({</span>
  <span class="nx">inner</span><span class="o">:</span>  <span class="mi">50</span>
<span class="p">,</span> <span class="nx">outer</span><span class="o">:</span>  <span class="mi">100</span>
<span class="p">,</span> <span class="nx">spikes</span><span class="o">:</span> <span class="mi">7</span>
<span class="p">})</span>
</pre></div>

<p>This method is also animatable:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">star</span><span class="p">.</span><span class="nx">animate</span><span class="p">().</span><span class="nx">star</span><span class="p">({</span> <span class="nx">spikes</span><span class="o">:</span> <span class="mi">10</span> <span class="p">})</span>
</pre></div>

<p>Finally, if you only want to get the point data, the star builder is directly available at:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">SVG</span><span class="p">.</span><span class="nx">shapes</span><span class="p">.</span><span class="nx">star</span><span class="p">({</span> <span class="nx">spikes</span><span class="o">:</span> <span class="mi">10</span> <span class="p">})</span>
</pre></div>

<p>Note that this will return an instance of <code>SVG.PointArray</code>.</p>

<h3>
<a name="ngon" class="anchor" href="#ngon"><span class="octicon octicon-link"></span></a>Ngon</h3>

<p>The <code>ngon()</code> method only requires two parameters, <code>radius</code> and <code>edges</code>:</p>

<div class="highlight highlight-javascript"><pre><span class="kd">var</span> <span class="nx">ngon</span> <span class="o">=</span> <span class="nx">draw</span><span class="p">.</span><span class="nx">polygon</span><span class="p">().</span><span class="nx">ngon</span><span class="p">({</span>
  <span class="nx">radius</span><span class="o">:</span> <span class="mi">150</span>
<span class="p">,</span> <span class="nx">edges</span><span class="o">:</span>    <span class="mi">5</span>
<span class="p">})</span>
</pre></div>

<p>This method is also animatable:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">star</span><span class="p">.</span><span class="nx">animate</span><span class="p">().</span><span class="nx">ngon</span><span class="p">({</span> <span class="nx">edges</span><span class="o">:</span> <span class="mi">7</span><span class="p">,</span> <span class="nx">radius</span><span class="o">:</span> <span class="mi">200</span> <span class="p">})</span>
</pre></div>

<p>Finally, if you only want to get the point data, the ngon builder is directly available at:</p>

<div class="highlight highlight-javascript"><pre><span class="nx">SVG</span><span class="p">.</span><span class="nx">shapes</span><span class="p">.</span><span class="nx">ngon</span><span class="p">({</span> <span class="nx">edges</span><span class="o">:</span> <span class="mi">10</span> <span class="p">})</span>
</pre></div>

<p>Note that this will return an instance of <code>SVG.PointArray</code>.</p>

<h2>
<a name="to-do" class="anchor" href="#to-do"><span class="octicon octicon-link"></span></a>To-do</h2>

<ul>
<li>Cog wheel</li>
<li>Wedge</li>
<li>Arc</li>
<li>Cross</li>
</ul><p>Head start: <a href="http://pastie.org/929979">http://pastie.org/929979</a></p>

<h2>
<a name="dependencies" class="anchor" href="#dependencies"><span class="octicon octicon-link"></span></a>Dependencies</h2>

<p>This module requires svg.js v0.31.</p></article>
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
      <li>&copy; 2014 <span title="0.08902s from github-fe131-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

