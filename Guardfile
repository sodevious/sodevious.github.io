group :development do
  gem 'guard-livereload', require: false
  gem 'guard-compass'
end

guard :compass, configuration_file: 'config.rb',
      compile_on_start: true do
  watch(%r{src/scss+\.scss$})
  watch(%r{src/sass+\.sass$})
end

guard 'livereload' do
  watch(%r{assets/stylesheets.+\.(css)})
  watch(%r{\.(html)})
end