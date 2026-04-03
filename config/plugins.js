module.exports = () => ({
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY')
      }
      settings: {
        defaultFrom: 'arthur@bwop.io',
        defaultReplyTo: 'arthur@bwop.io',
        testAddress: 'arthur@bwop.io'
      }
    }
  }
});
