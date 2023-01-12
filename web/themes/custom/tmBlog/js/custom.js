(function($) {
    Drupal.behaviors.exampleModule = {
        attach: function(context, settings) {
            $('input.custom_daterange').daterangepicker({
                autoUpdateInput: false,
                "drops": "auto",
                locale: {
                    cancelLabel: 'Clear Selection',
                    format: 'DD/MM/YYYY'
                }
            });

            $('input.custom_daterange').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
                $('.exposed-form-row input[name="changed[min]"]').val(picker.startDate.format('MM/DD/YYYY'));
                $('.exposed-form-row input[name="changed[max]"]').val(picker.endDate.add('1', 'day').format('MM/DD/YYYY'));
                $('.exposed-form-row .form-actions input.form-submit').trigger('click');

            });

            $('input.custom_daterange').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
                $('.exposed-form-row input[name="changed[min]"]').val('');
                $('.exposed-form-row input[name="changed[max]"]').val('');
                $('.exposed-form-row .form-actions input.form-submit').trigger('click');
            });
            $('.exposed-form-row details.form-item summary').on('click', function() {
                $(this).closest('.exposed-form-row').find('summary').attr('open', 'false');
                $(this).attr('open', 'true')
            });
            $("details").on("click", function(e) {
                $("details[open]").not(this).removeAttr("open");
                e.stopPropagation();
            });
            $(document).on("click", function() {
                $("details[open]").removeAttr("open");
            });
            $(document).ready(function() {
                $("details[open]").removeAttr("open");
            });
            $('.view-header a.clear-filter').on('click', function(e) {
                e.preventDefault()
                $(this).closest('.view').find('form.views-exposed-form input,form.views-exposed-form select').not(':button, :submit, :reset')
                    .val('')
                    .prop('checked', false)
                    .prop('selected', false);
                $(this).closest('.view').find('form.views-exposed-form').find('input.form-submit').trigger('click');
            });
            if ($('#shareblock-desk').length) {
                var aheader = $('article .innerbanner').outerHeight() + $('article .innerbanner').offset().top;
                var afooter = $('.block-views-blocktrending-block-3').outerHeight() / .3;

                $('#shareblock-desk').affix({
                    offset: {
                        top: aheader,
                        bottom: afooter,
                    }
                });
            }
            $('#myDropdown .selection').on('click', function() {
                let index = $(this).data('index');
                $('.mainbnrslider-nav').slick('slickGoTo', index - 1);
                $('.mainbnrslider-nav').slick('slickPause');
            });
            $('.flag.flag-bookmark.action-unflag a').on('click', function() {
                $(this).closest('.view-flag-bookmark').find('.exposed-form-row .form-actions .form-submit').trigger('click');
            });
            $('.flag.flag-bookmark a').on("click", function() {
                let _this = $(this).closest(".mb");
                let checked_options = {
                    // 'container': 'body',
                    'content': 'Bookmark Added',
                    'placement': 'top',
                    'trigger': 'manual',
                };
                let unchecked_options = {
                    // 'container': 'body',
                    'content': 'Bookmark Removed',
                    'placement': 'top',
                    'trigger': 'manual',
                };
                if ($(this).closest('.flag-bookmark').hasClass('action-flag')) {
                    setTimeout(function() {
                        _this.popover('dispose');
                    }, 2000);
                    _this.popover('dispose');
                    _this.popover(checked_options);
                    _this.popover('show');
                } else {
                    setTimeout(function() {
                        _this.popover('dispose');
                    }, 2000);
                    _this.popover('dispose');
                    _this.popover(unchecked_options);
                    _this.popover('show');
                }
            });
            let select = $('form select');
            let select_title = select.find('option[value="All"]').text();
            select.find('option[value="All"]').remove();
            if (select_title != "") {
                select.prop('title', select_title);
            }
            $(".back-top").click(function() {
                let _this = $(this);
                $('html, body').scrollTop($(_this.data('scrollto')).offset().top);
            });

            $('select[data-drupal-selector="edit-field-category-target-id-1"],select[data-drupal-selector="edit-field-category-target-id"]', context).select2().on('select2:open', (elm) => {
                const targetLabel = $(elm.target).prev('label');
                // targetLabel.addClass('selected');

                var value = elm.currentTarget.value;
                if (value === '') {} else {
                    targetLabel.addClass('selected');
                }
            }).on('select2:close', (elm) => {
                const target = $(elm.target);
                const targetLabel = target.prev('label');
                const targetOptions = $(elm.target.selectedOptions);
                if (targetOptions.length !== 0) {
                    targetLabel.addClass('selected');
                }
                if (targetOptions.length === 0) {
                    targetLabel.removeAttr('class');
                }
            });
            $('select[data-drupal-selector="edit-field-category-target-id-1"],select[data-drupal-selector="edit-field-category-target-id"]', context).each(function(e) {
                console.log($(this).val().length);
                if ($(this).val().length) {
                    $(this).addClass('selected');
                } else {
                    $(this).removeClass('selected');
                }
            });

            $('select[data-drupal-selector="edit-field-category-target-id-1"],select[data-drupal-selector="edit-field-category-target-id"]', context).on('select2:opening select2:closing', function(event) {
                var $searchfield = $(this).parent().find('.select2-search__field');
                $searchfield.prop('disabled', true);
            });
            var aheader = $('.innerbanner').outerHeight() + 20;
            var afooter = $('.trending-homepage').outerHeight() / .3;

            $('#shareblock-desk').affix({
                offset: {
                    top: aheader,
                    bottom: afooter,
                }
            });
        }
    }
})(jQuery);