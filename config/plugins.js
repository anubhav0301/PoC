// path: ./config/plugins.js

module.exports = ({ env }) => ({
    
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AAKIATRFHIHUJODRXJVVC'),
          secretAccessKey: env('DGh73wsYBDmFpECqvobAVZBcNugByd9jHt0l1Tqv'),
          region: 'ap-south-1',
          params: {
            Bucket: 'nye-cms-ui',
          },
          acl: 'public-read'
        },
      },
    },

  });
  