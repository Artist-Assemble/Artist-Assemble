CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'                        # required
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     ENV['aws_key'],                        # required
    aws_secret_access_key: ENV['aws_secret'],                        # required
    region:                'us-east-2'
  }
  config.fog_directory  = 'artist-assemble'                          # required
  config.fog_public     = true
end
