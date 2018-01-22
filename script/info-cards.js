(function() {

  var infoModule = {

    init: function() {
      this.cacheDom();
      this.bindEvents();
    },
      cacheDom: function() {
        //cards
        this.elements = $('#info-module') // cached all card info once and used .find to identify individual elements
        this.$aboutCard = this.elements.find('#about-card');
        this.$contactCard = this.elements.find('#contact-card');
        this.$newsCard = this.elements.find('#news-card');
        this.$followCard = this.elements.find('#follow-card');
        //triggers
        this.$aboutTrigger = this.elements.find('#about-trigger');
        this.$contactTrigger = this.elements.find('#contact-trigger');
        this.$newsTrigger = this.elements.find('#news-trigger');
        this.$followTrigger = this.elements.find('#follow-trigger');
        this.$aboutBannerTrigger = this.elements.find('#about-banner-trigger');
        this.$contactBannerTrigger = this.elements.find('#contact-banner-trigger');
        this.$newsBannerTrigger = this.elements.find('#news-banner-trigger');
        this.$followBannerTrigger = this.elements.find('#follow-banner-trigger');
        this.$clearTrigger = this.elements.find('#clear-trigger');
      },
      bindEvents: function(){
        this.$aboutTrigger.on('click', this.showAboutCard.bind(this));
        this.$contactTrigger.on('click', this.showContactCard.bind(this));
        this.$newsTrigger.on('click', this.showNewsCard.bind(this));
        this.$followTrigger.on('click', this.showFollowCard.bind(this));
        this.$aboutBannerTrigger.on('click', this.clearCards.bind(this)); // multiple handlers
        this.$aboutBannerTrigger.on('click', this.showAboutCard.bind(this));
        this.$contactBannerTrigger.on('click', this.clearCards.bind(this));// multiple handlers
        this.$contactBannerTrigger.on('click', this.showContactCard.bind(this));
        this.$newsBannerTrigger.on('click', this.clearCards.bind(this));// multiple handlers
        this.$newsBannerTrigger.on('click', this.showNewsCard.bind(this));
        this.$followBannerTrigger.on('click', this.clearCards.bind(this));// multiple handlers
        this.$followBannerTrigger.on('click', this.showFollowCard.bind(this));
        this.$clearTrigger.on('click', this.clearCards.bind(this));
      },
      showAboutCard: function (){
        this.$aboutCard.addClass('is-visible');
        this.$clearTrigger.addClass('is-visible');
      },
      showContactCard: function(){
          this.$contactCard.addClass('is-visible');
          this.$clearTrigger.addClass('is-visible');
      },
      showNewsCard: function(){
          this.$newsCard.addClass('is-visible');
          this.$clearTrigger.addClass('is-visible');
      },
      showFollowCard: function(){
          this.$followCard.addClass('is-visible');
          this.$clearTrigger.addClass('is-visible');
      },
      clearCards: function(){
          this.$aboutCard.removeClass('is-visible');
          this.$contactCard.removeClass('is-visible');
          this.$newsCard.removeClass('is-visible');
          this.$followCard.removeClass('is-visible');
          this.$clearTrigger.removeClass('is-visible');
      },

  };
  infoModule.init();
})()
