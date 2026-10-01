require 'pusher'

# Realtime messaging via Pusher. Keys are read from the environment so no
# secrets live in the repo. The app works without them (no live updates),
# controllers rescue Pusher errors, and the layout injects a no-op stub.
Pusher.app_id = ENV['PUSHER_APP_ID']
Pusher.key = ENV['PUSHER_KEY']
Pusher.secret = ENV['PUSHER_SECRET']
Pusher.cluster = ENV.fetch('PUSHER_CLUSTER', 'us2')
Pusher.encrypted = true
Pusher.logger = Rails.logger if ENV['PUSHER_DEBUG'].present?

def pusher_configured?
  ENV['PUSHER_APP_ID'].present? && ENV['PUSHER_KEY'].present? && ENV['PUSHER_SECRET'].present?
end

def pusher_trigger(*args)
  return unless pusher_configured?
  Pusher.trigger(*args)
rescue StandardError => e
  Rails.logger.warn("Pusher trigger failed (non-fatal): #{e.class}: #{e.message}")
end
