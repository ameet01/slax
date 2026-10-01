source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# json < 3: ActiveSupport 7.1 passes quirks_mode to JSON.generate,
# which json 3.x removed (breaks session cookies)
gem 'json', '< 3'
# Modernized 2026: Rails 7.1 on Ruby 3.2+
gem 'rails', '~> 7.1.0'
# Rack 2.x: the safe line for Rails 7.1 (Rack 3 support landed later)
gem 'rack', '>= 2.2.4', '< 3'
# Use postgresql as the database for Active Record
gem 'pg', '~> 1.5'
# Use Puma as the app server
gem 'puma', '~> 6.4'
# Sprockets asset pipeline (this app uses sprockets manifests)
gem 'sprockets-rails', '~> 3.4'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
gem 'faker'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 5.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.11'
# Pusher for realtime messaging (keys come from ENV; app degrades gracefully without them)
gem 'pusher', '~> 2.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

gem 'jquery-rails'
gem 'font-awesome-rails'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '~> 4.2.0'
  gem 'listen'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
