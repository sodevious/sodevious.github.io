group :development do
  gem 'guard-livereload', require: false
  gem 'guard-compass'
end

guard :compass, configuration_file: 'config.rb', compile_on_start: true do
  watch(%r{_site/assets/sass/.+\.(scss|sass)})
end

guard 'livereload', grace_period: 0.5, apply_css_live: false do
  watch(%r{_site/assets/stylesheets/.+\.css})
end