var $mainView = $mainView || {
    $ct: $('#main-view'),

    init: function() {        
        var that = this;

        that.$tabs = $('#main-tabs', that.$ct);
        that.$content = $('#main-content', that.$ct);

        //make tabs sortable and attach close event`
        that.$tabs.find('.item > .close')
            .on('click', function(event) { //close button clicked

                that.closeTab( $(this).closest('.item').attr('id') );
                
                return false;
            });

        //init current tabs
        that.$tabs.find('> .item').tab( that.getTabParameters() );

        that.selectFirstTab();
    },

    selectFirstTab: function() {
        this.selectTab( this.$tabs.find('> .item').first().attr('id') );
    },

    isTabSelected: function(id) {
        return this.$tabs.find('> #'+id).hasClass('active');
    },

    getTabParameters: function() {
        return {
            context: this.$ct,
            cache: true,
            onTabInit: function(tabPath, parameterArray, historyEvent) {
                console.log('Initialized tab: ' + tabPath);
            },
            onTabLoad: function(tabPath, parameterArray, historyEvent) { //tab selected
                console.log('Selected tab: ' + tabPath);
            }
        };
    },

    selectTab: function(id) {
        if(!id) {
            return ;
        }

        //activate the tab
        this.$tabs.find('> #'+id).click();
    },

    openTab: function() {
        var that = this;

        var tabId = (new Date()).getTime();

        that.$content.append(
            '<div id="' + tabId + '" class="ui bottom attached tab loading" data-tab="' + tabId + '"></div>'
        );

        that.$tabs
            .append(
                '<a id="' + tabId + '" class="item" data-tab="' + tabId + '">'+
                    'Test ' + tabId + '<i class="small close icon"></i>'+
                '</a>'
            )
            .find('> .item').last().tab( that.getTabParameters() );

        that.selectTab(tabId);

        that.saveTabsOrder();
    },

    closeTab: function(id) {
        var $tab = this.$tabs.find('> #'+id);
        var $content = this.$content.find('> #'+id);

        if(!$tab.length || !$content.length) {
            return ; //prevent undesired behavior
        }

        //if this tab was selected, we need to jump to another one
        if( this.isTabSelected(id) ) {
            var nextId = null;
            if($tab.next().length) { //check if there's a next tab and select it
                nextId = $tab.next().attr('id');
            }
            else { //if there's no next tab, just go with the previous one
                nextId = $tab.prev().attr('id');
            }

            console.log('Next tab: ' + nextId);

            this.selectTab(nextId);
        }

        $tab.remove();
        $content.remove();

        $tab = null;
        $content = null;
    }
};

$mainView.init(); 