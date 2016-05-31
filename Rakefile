require 'rake'
require 'html-proofer'

task :default do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {
    :empty_alt_ignore => true,
    :url_ignore => [
      'http://localhost:4000'
    ],
    :cache => {
      :timeframe => '1d'
    },
    :typhoeus => {
      :followlocation => true,
      :ssl_verifypeer => false,
      :headers => { 'User-Agent' => 'html-proofer' }
    }
  }).run
end
