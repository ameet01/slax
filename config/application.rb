require_relative 'boot'

# Load only the frameworks this app uses (skips ActiveStorage/ActionText/
# ActionMailbox, whose engines inject ES6 JavaScript into asset precompile).
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Slack
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1
    config.middleware.use Rack::Deflater
    # ActionCable isn't used (realtime goes through Pusher); keep its ES6
    # client out of the asset precompile list (breaks uglifier).
    config.action_cable.precompile_assets = false
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
