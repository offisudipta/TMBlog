(function($) { // toggle mobile nav

    $(function() {
        $('[data-toggle="popover"]').popover()
    })

    $('[data-toggle="popover"]').popover().click(function() {
        setTimeout(function() {
            $('[data-toggle="popover"]').popover('hide');
        }, 2000);
    });

    // toggle mobile nav
    $(document).on("click", ".navi--mobmenu", function() {
        $(".submenu--mobmenu").toggle();

        $("#searchModal").modal("hide"); /* Hide SearchModal */
    });

    // toggle for filterDropdown pillars
    $(document).on("click", ".pillar-category", function() {
        if ($("#filterDropdownModal").hasClass("d-none")) {
            $("#filterDropdownModal").removeClass("d-none");
            $("#filterDropdownModal").addClass("d-block");
        } else {
            $("#filterDropdownModal").removeClass("d-block");
            $("#filterDropdownModal").addClass("d-none");
        }
    });

    // toggle for filterDropdown content
    $(document).on("click", ".content-category", function() {
        if ($("#filterContentDropdownModal").hasClass("d-none")) {
            $("#filterContentDropdownModal").removeClass("d-none");
            $("#filterContentDropdownModal").addClass("d-block");
        } else {
            $("#filterContentDropdownModal").removeClass("d-block");
            $("#filterContentDropdownModal").addClass("d-none");
        }
    });

    // clicking away from dropdown, causing dropdown to close (homepage filters)
    $(document).click(function(event) {
        if ($(event.target).closest('div.pillar-category--modal').length == 0) {
            $('#filterDropdownModal').addClass("d-none");
            $('#filterDropdownModal').removeClass("d-block");
        }
        if ($(event.target).closest('div.content-category--modal').length == 0) {
            $('#filterContentDropdownModal').addClass("d-none");
            $('#filterContentDropdownModal').removeClass("d-block");
        }

        if ($(event.target).closest('div.mainbnrslider-nav-cover').length == 0) {
            // console.log("clicked away from mainbnrslider-nav");
            // $('.dropdown-content').toggle();
            if ($(".dropdown-content").hasClass("open")) {
                // console.log("dropdown-content has class open");
                $(".dropdown-content").removeClass("open");
                $(".dropdown-content").removeClass("d-none");
                $(".dropdown-content").addClass("d-block");
            } else {
                $(".dropdown-content").addClass("d-none");
                $(".dropdown-content").removeClass("d-block");
                $(".dropdown-content").removeClass("open");
            }
        }
    });


    $(document).on("click", ".filterDropdown-confirm", function() {

        if ($(".ideas-dropdown").is(':checked')) {
            console.log("ideas checked");
            $(".filter--cards").removeClass("d-none");

            $(".filter--trends").addClass("d-none");
            $(".filter--insights").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--ideas").hasClass("article-tagging")) {
                    $(".filter--ideas.article-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                console.log("video");

                if ($(".filter--ideas").hasClass("video-tagging")) {
                    $(".filter--ideas.video-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 video');

                    $(".filter--ideas.article-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--ideas").hasClass("podcast-tagging")) {
                    $(".filter--ideas.podcast-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 podcast');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else if ($(".trends-dropdown").is(':checked')) {
            // console.log("click");
            console.log("trends");

            if ($(".filter--cards").hasClass("filter--trends")) {
                $(".filter--cards").removeClass("d-none");

                $(".filter--ideas").addClass("d-none");
                $(".filter--insights").addClass("d-none");
                $(".filter--achievements").addClass("d-none");

                $(document).on("click", ".article-select", function() {
                    // console.log("article");

                    if ($(".filter--trends").hasClass("article-tagging")) {
                        $(".filter--trends.article-tagging").removeClass("d-none");
                        // console.log('filter trends inside111');

                        $(".filter--trends.video-tagging").addClass("d-none");
                        $(".filter--trends.podcast-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter trends else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });

                $(document).on("click", ".video-select", function() {
                    // console.log("video");

                    if ($(".filter--trends").hasClass("video-tagging")) {
                        $(".filter--trends.video-tagging").removeClass("d-none");
                        // console.log('filter trends inside111 video');

                        $(".filter--trends.article-tagging").addClass("d-none");
                        $(".filter--trends.podcast-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter trends else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });

                $(document).on("click", ".podcast-select", function() {
                    // console.log("podcast");

                    if ($(".filter--trends").hasClass("podcast-tagging")) {
                        $(".filter--trends.podcast-tagging").removeClass("d-none");
                        // console.log('filter trends inside111 podcast');

                        $(".filter--trends.video-tagging").addClass("d-none");
                        $(".filter--trends.article-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter insight else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });
            } else {
                $(".filter--cards").addClass('d-none');
            }
        } else if ($(".achievements-dropdown").is(':checked')) {
            // console.log("click");
            console.log("achievements");

            if ($(".filter--cards").hasClass("filter--achievements")) {
                $(".filter--cards").removeClass("d-none");
                // console.log('filter achievements inside');

                $(".filter--ideas").addClass("d-none");
                $(".filter--trends").addClass("d-none");
                $(".filter--insights").addClass("d-none");

                $(document).on("click", ".article-select", function() {
                    // console.log("article");

                    if ($(".filter--achievements").hasClass("article-tagging")) {
                        $(".filter--achievements.article-tagging").removeClass("d-none");
                        // console.log('filter achievements inside111');

                        $(".filter--achievements.video-tagging").addClass("d-none");
                        $(".filter--achievements.podcast-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter achievements else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });

                $(document).on("click", ".video-select", function() {
                    // console.log("video");

                    if ($(".filter--achievements").hasClass("video-tagging")) {
                        $(".filter--achievements.video-tagging").removeClass("d-none");
                        // console.log('filter achievements inside111 video');

                        $(".filter--achievements.article-tagging").addClass("d-none");
                        $(".filter--achievements.podcast-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter achievements else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });

                $(document).on("click", ".podcast-select", function() {
                    // console.log("podcast");

                    if ($(".filter--achievements").hasClass("podcast-tagging")) {
                        $(".filter--achievements.podcast-tagging").removeClass("d-none");
                        // console.log('filter achievements inside111 podcast');

                        $(".filter--achievements.video-tagging").addClass("d-none");
                        $(".filter--achievements.article-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter insight else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });
            } else {
                $(".filter--cards").addClass('d-none');
            }
        } else if ($(".insights-dropdown").is(':checked')) {
            // console.log("click");
            console.log("insights");

            if ($("#insights").hasClass("d-none")) {
                console.log("insights");
                $("#ideas").addClass("d-none");
                $("#trends").addClass("d-none");
                $("#achievements").addClass("d-none");

                $("#insights").removeClass("d-none");
            }

            if ($(".filter--cards").hasClass("filter--insights")) {
                $(".filter--cards").removeClass("d-none");
                // console.log('filter insight inside');

                $(".filter--ideas").addClass("d-none");
                $(".filter--trends").addClass("d-none");
                $(".filter--achievements").addClass("d-none");

                $(document).on("click", ".article-select", function() {
                    // console.log("article");

                    if ($(".filter--insights").hasClass("article-tagging")) {
                        $(".filter--insights.article-tagging").removeClass("d-none");
                        // console.log('filter insight inside111');

                        $(".filter--insights.video-tagging").addClass("d-none");
                        $(".filter--insights.podcast-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter insight else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });

                $(document).on("click", ".video-select", function() {
                    // console.log("video");

                    if ($(".filter--insights").hasClass("video-tagging")) {
                        $(".filter--insights.video-tagging").removeClass("d-none");
                        // console.log('filter insight inside111 video');

                        $(".filter--insights.article-tagging").addClass("d-none");
                        $(".filter--insights.podcast-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter insight else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });

                $(document).on("click", ".podcast-select", function() {
                    // console.log("podcast");

                    if ($(".filter--insights").hasClass("podcast-tagging")) {
                        $(".filter--insights.podcast-tagging").removeClass("d-none");
                        // console.log('filter insight inside111 podcast');

                        $(".filter--insights.video-tagging").addClass("d-none");
                        $(".filter--insights.article-tagging").addClass("d-none");

                        $(".filter--cards-no-card").removeClass('d-block');
                        $(".filter--cards-no-card").addClass('d-none');
                        $(".load-more").addClass('d-block');
                        $(".load-more").removeClass('d-none');
                    } else {
                        // console.log('filter insight else');
                        $(".filter--cards").addClass('d-none');

                        $(".filter--cards-no-card").removeClass('d-none');
                        $(".filter--cards-no-card").addClass('d-block');
                        $(".load-more").addClass('d-none');
                        $(".load-more").removeClass('d-block');
                    }

                });
            } else {
                console.log('filter insight else');
                $(".filter--cards").addClass('d-none');
            }
        } else {
            console.log("insights unchecked");
            $(".filter--cards").removeClass('d-none');
        }

        $('#modal--close').modal('hide');
    });

    $(document).on("click", ".filterContentDropdown-confirm", function() {
        console.log("filterContentDropdown-confirm");

        // $(document).on("click", ".article-select", function () {
        if ($(".video-select").is(':checked')) {
            console.log("video");

            // video-select

            if ($(".filter--cards").hasClass("video-tagging")) {
                $(".filter--cards .video-tagging").removeClass("d-none");
                console.log('filter ideas inside111');

                $(".filter--cards .article-tagging").addClass("d-none");
                $(".filter--cards .podcast-tagging").addClass("d-none");

                $(".filter--cards-no-card").removeClass('d-block');
                $(".filter--cards-no-card").addClass('d-none');
                $(".load-more").addClass('d-block');
                $(".load-more").removeClass('d-none');
            } else {
                // console.log('filter ideas else');
                $(".filter--cards").addClass('d-none');

                $(".filter--cards-no-card").removeClass('d-none');
                $(".filter--cards-no-card").addClass('d-block');
                $(".load-more").addClass('d-none');
                $(".load-more").removeClass('d-block');
            }

        };

        $('#modal--close').modal('hide');
    });

    $(document).on("click", ".clear--filter", function() {
        $(".filter--cards").removeClass('d-none');
    });

    // toggle mobile share button post page
    $(document).on("click", "#toggle-icon", function() {
        if ($("#toggle-icon").hasClass("animation")) {
            $("#toggle-icon").removeClass("animation");
            $("#toggle-icon").addClass("animation-reverse");
        } else {
            $("#toggle-icon").removeClass("animation-reverse");
            $("#toggle-icon").addClass("animation");
        }
    });

    // toggle summarise and long content on post page
    $(document).on("click", "#summarise-content", function() {
        if ($(".short-version").hasClass("d-none")) {
            $(".short-version").removeClass("d-none");
            $(".long-version").addClass("d-none");
            $(".summarise-txt").addClass("d-none");
            $(".extend-txt").removeClass("d-none");
        } else {
            // if ($("#long-version").hasClass("d-none")) {
            $(".long-version").removeClass("d-none");
            $(".short-version").addClass("d-none");
            $(".extend-txt").addClass("d-none");
            $(".summarise-txt").removeClass("d-none");
        }
    });

    // for dropdown filter start
    $(document).on("click", ".ideas", function() {
        console.log("click");

        if ($("#ideas").hasClass("d-none")) {
            console.log("ideas");
            $("#trends").addClass("d-none");
            $("#achievements").addClass("d-none");
            $("#insights").addClass("d-none");


            $("#ideas").removeClass("d-none");

        }

        if ($(".filter--cards").hasClass("filter--ideas")) {
            $(".filter--cards").removeClass("d-none");

            $(".filter--trends").addClass("d-none");
            $(".filter--insights").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--ideas").hasClass("article-tagging")) {
                    $(".filter--ideas.article-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                console.log("video");

                if ($(".filter--ideas").hasClass("video-tagging")) {
                    $(".filter--ideas.video-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 video');

                    $(".filter--ideas.article-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--ideas").hasClass("podcast-tagging")) {
                    $(".filter--ideas.podcast-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 podcast');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            $(".filter--cards").addClass('d-none');
        }

        $(document).on("click", ".filterDropdown-confirm", function() {

        });
    });

    $(document).on("click", ".trends", function() {
        // console.log("click");

        if ($("#trends").hasClass("d-none")) {
            // console.log("trends");
            $("#ideas").addClass("d-none");
            $("#achievements").addClass("d-none");
            $("#insights").addClass("d-none");

            $("#trends").removeClass("d-none");
        }

        if ($(".filter--cards").hasClass("filter--trends")) {
            $(".filter--cards").removeClass("d-none");

            $(".filter--ideas").addClass("d-none");
            $(".filter--insights").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--trends").hasClass("article-tagging")) {
                    $(".filter--trends.article-tagging").removeClass("d-none");
                    // console.log('filter trends inside111');

                    $(".filter--trends.video-tagging").addClass("d-none");
                    $(".filter--trends.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter trends else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--trends").hasClass("video-tagging")) {
                    $(".filter--trends.video-tagging").removeClass("d-none");
                    // console.log('filter trends inside111 video');

                    $(".filter--trends.article-tagging").addClass("d-none");
                    $(".filter--trends.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter trends else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--trends").hasClass("podcast-tagging")) {
                    $(".filter--trends.podcast-tagging").removeClass("d-none");
                    // console.log('filter trends inside111 podcast');

                    $(".filter--trends.video-tagging").addClass("d-none");
                    $(".filter--trends.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            $(".filter--cards").addClass('d-none');
        }
    });

    $(document).on("click", ".achievements", function() {
        // console.log("click");

        if ($("#achievements").hasClass("d-none")) {
            // console.log("achievements");
            $("#ideas").addClass("d-none");
            $("#trends").addClass("d-none");
            $("#insights").addClass("d-none");

            $("#achievements").removeClass("d-none");

        }

        if ($(".filter--cards").hasClass("filter--achievements")) {
            $(".filter--cards").removeClass("d-none");
            // console.log('filter achievements inside');

            $(".filter--ideas").addClass("d-none");
            $(".filter--trends").addClass("d-none");
            $(".filter--insights").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--achievements").hasClass("article-tagging")) {
                    $(".filter--achievements.article-tagging").removeClass("d-none");
                    // console.log('filter achievements inside111');

                    $(".filter--achievements.video-tagging").addClass("d-none");
                    $(".filter--achievements.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter achievements else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--achievements").hasClass("video-tagging")) {
                    $(".filter--achievements.video-tagging").removeClass("d-none");
                    // console.log('filter achievements inside111 video');

                    $(".filter--achievements.article-tagging").addClass("d-none");
                    $(".filter--achievements.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter achievements else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--achievements").hasClass("podcast-tagging")) {
                    $(".filter--achievements.podcast-tagging").removeClass("d-none");
                    // console.log('filter achievements inside111 podcast');

                    $(".filter--achievements.video-tagging").addClass("d-none");
                    $(".filter--achievements.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            $(".filter--cards").addClass('d-none');
        }
    });

    $(document).on("click", ".insights", function() {
        // console.log("click");

        if ($("#insights").hasClass("d-none")) {
            console.log("insights");
            $("#ideas").addClass("d-none");
            $("#trends").addClass("d-none");
            $("#achievements").addClass("d-none");

            $("#insights").removeClass("d-none");
        }

        if ($(".filter--cards").hasClass("filter--insights")) {
            $(".filter--cards").removeClass("d-none");
            // console.log('filter insight inside');

            $(".filter--ideas").addClass("d-none");
            $(".filter--trends").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--insights").hasClass("article-tagging")) {
                    $(".filter--insights.article-tagging").removeClass("d-none");
                    // console.log('filter insight inside111');

                    $(".filter--insights.video-tagging").addClass("d-none");
                    $(".filter--insights.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--insights").hasClass("video-tagging")) {
                    $(".filter--insights.video-tagging").removeClass("d-none");
                    // console.log('filter insight inside111 video');

                    $(".filter--insights.article-tagging").addClass("d-none");
                    $(".filter--insights.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--insights").hasClass("podcast-tagging")) {
                    $(".filter--insights.podcast-tagging").removeClass("d-none");
                    // console.log('filter insight inside111 podcast');

                    $(".filter--insights.video-tagging").addClass("d-none");
                    $(".filter--insights.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            console.log('filter insight else');
            $(".filter--cards").addClass('d-none');
        }
    });
    // for dropdown filter end

    // to trigger filtering when user click on achor tag on navbars
    let searchParams = new URLSearchParams(window.location.search);
    let param = searchParams.get('category');
    // console.log(param);
    if (param == 'ideas') {
        // console.log(param + 'ideas');

        if ($("#ideas").hasClass("d-none")) {
            // console.log("ideas");
            $("#trends").addClass("d-none");
            $("#achievements").addClass("d-none");
            $("#insights").addClass("d-none");
            $(".pillar-bnr").addClass("pillar-idea-bnr");
            $(".idea-header").addClass("d-block");
            $(".trends-header").addClass("d-none");
            $(".ach-header").addClass("d-none");
            $(".ins-header").addClass("d-none");
            $(".idea-header").removeClass("d-none");
            $(".idea-subheader").addClass("d-block");
            $(".trends-subheader").addClass("d-none");
            $(".ach-subheader").addClass("d-none");
            $(".ins-subheader").addClass("d-none");
            $(".idea-subheader").removeClass("d-none");
            $(".pillar-bnr").removeClass("pillar-trends-bnr");
            $(".pillar-bnr").removeClass("pillar-achievements-bnr");
            $(".pillar-bnr").removeClass("pillar-insights-bnr");
            console.log('ideas');

            $("#ideas").removeClass("d-none");

        }

        if ($(".filter--cards").hasClass("filter--ideas")) {
            $(".filter--cards").removeClass("d-none");

            $(".filter--trends").addClass("d-none");
            $(".filter--insights").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--ideas").hasClass("article-tagging")) {
                    $(".filter--ideas.article-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--ideas").hasClass("video-tagging")) {
                    $(".filter--ideas.video-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 video');

                    $(".filter--ideas.article-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--ideas").hasClass("podcast-tagging")) {
                    $(".filter--ideas.podcast-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 podcast');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            $(".filter--cards").addClass('d-none');
        }
    } else if (param == 'trends') {


        // console.log(param + 'trends');

        if ($("#trends").hasClass("d-none")) {
            // console.log("trends");
            $("#ideas").addClass("d-none");
            $("#achievements").addClass("d-none");
            $("#insights").addClass("d-none");
            console.log('trends');
            $(".pillar-bnr").addClass("pillar-trends-bnr");
            $(".trends-header").addClass("d-block");
            $(".idea-header").addClass("d-none");
            $(".ach-header").addClass("d-none");
            $(".ins-header").addClass("d-none");
            $(".trends-header").removeClass("d-none");
            $(".trends-subheader").addClass("d-block");
            $(".idea-subheader").addClass("d-none");
            $(".ach-subheader").addClass("d-none");
            $(".ins-subheader").addClass("d-none");
            $(".trends-subheader").removeClass("d-none");
            $(".pillar-bnr").removeClass("pillar-idea-bnr");
            $(".pillar-bnr").removeClass("pillar-achievements-bnr");
            $(".pillar-bnr").removeClass("pillar-insights-bnr");

            $("#trends").removeClass("d-none");
        }

        if ($(".filter--cards").hasClass("filter--ideas")) {
            $(".filter--cards").removeClass("d-none");

            $(".filter--ideas").addClass("d-none");
            $(".filter--insights").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--ideas").hasClass("article-tagging")) {
                    $(".filter--ideas.article-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--ideas").hasClass("video-tagging")) {
                    $(".filter--ideas.video-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 video');

                    $(".filter--ideas.article-tagging").addClass("d-none");
                    $(".filter--ideas.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter ideas else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--ideas").hasClass("podcast-tagging")) {
                    $(".filter--ideas.podcast-tagging").removeClass("d-none");
                    // console.log('filter ideas inside111 podcast');

                    $(".filter--ideas.video-tagging").addClass("d-none");
                    $(".filter--ideas.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            $(".filter--cards").addClass('d-none');
        }
    } else if (param == 'achievements') {


        // console.log(param + 'achievements');

        if ($("#achievements").hasClass("d-none")) {
            // console.log("achievements");
            $("#ideas").addClass("d-none");
            $("#trends").addClass("d-none");
            $("#insights").addClass("d-none");
            $(".pillar-bnr").addClass("pillar-achievements-bnr");
            $(".ach-header").addClass("d-block");
            $(".trends-header").addClass("d-none");
            $(".ideas-header").addClass("d-none");
            $(".ins-header").addClass("d-none");
            $(".ach-header").removeClass("d-none");
            $(".ach-subheader").addClass("d-block");
            $(".trends-subheader").addClass("d-none");
            $(".ideas-subheader").addClass("d-none");
            $(".ins-subheader").addClass("d-none");
            $(".ach-subheader").removeClass("d-none");
            $(".pillar-bnr").removeClass("pillar-trends-bnr");
            $(".pillar-bnr").removeClass("pillar-idea-bnr");
            $(".pillar-bnr").removeClass("pillar-insights-bnr");
            console.log('achievements');

            $("#achievements").removeClass("d-none");

        }

        if ($(".filter--cards").hasClass("filter--achievements")) {
            $(".filter--cards").removeClass("d-none");
            // console.log('filter achievements inside');

            $(".filter--ideas").addClass("d-none");
            $(".filter--trends").addClass("d-none");
            $(".filter--insights").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--achievements").hasClass("article-tagging")) {
                    $(".filter--achievements.article-tagging").removeClass("d-none");
                    // console.log('filter achievements inside111');

                    $(".filter--achievements.video-tagging").addClass("d-none");
                    $(".filter--achievements.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter achievements else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--achievements").hasClass("video-tagging")) {
                    $(".filter--achievements.video-tagging").removeClass("d-none");
                    // console.log('filter achievements inside111 video');

                    $(".filter--achievements.article-tagging").addClass("d-none");
                    $(".filter--achievements.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter achievements else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--achievements").hasClass("podcast-tagging")) {
                    $(".filter--achievements.podcast-tagging").removeClass("d-none");
                    // console.log('filter achievements inside111 podcast');

                    $(".filter--achievements.video-tagging").addClass("d-none");
                    $(".filter--achievements.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            $(".filter--cards").addClass('d-none');
        }
    } else if (param == 'insights') {


        // console.log(param + 'insights');

        if ($("#insights").hasClass("d-none")) {
            // console.log("insights");
            $("#ideas").addClass("d-none");
            $("#trends").addClass("d-none");
            $("#achievements").addClass("d-none");
            $(".pillar-bnr").addClass("pillar-insights-bnr");
            $(".ins-header").addClass("d-block");
            $(".ideas-header").addClass("d-none");
            $(".trends-header").addClass("d-none");
            $(".ins-header").addClass("d-none");
            $(".pillars-header").removeClass("d-none");
            $(".ins-subheader").addClass("d-block");
            $(".ideas-subheader").addClass("d-none");
            $(".trends-subheader").addClass("d-none");
            $(".ins-subheader").addClass("d-none");
            $(".pillars-header").removeClass("d-none");
            $(".pillar-bnr").removeClass("pillar-trends-bnr");
            $(".pillar-bnr").removeClass("pillar-idea-bnr");
            console.log('insights');

            $("#insights").removeClass("d-none");
        }

        if ($(".filter--cards").hasClass("filter--insights")) {
            $(".filter--cards").removeClass("d-none");
            // console.log('filter insight inside');

            $(".filter--ideas").addClass("d-none");
            $(".filter--trends").addClass("d-none");
            $(".filter--achievements").addClass("d-none");

            $(document).on("click", ".article-select", function() {
                // console.log("article");

                if ($(".filter--insights").hasClass("article-tagging")) {
                    $(".filter--insights.article-tagging").removeClass("d-none");
                    // console.log('filter insight inside111');

                    $(".filter--insights.video-tagging").addClass("d-none");
                    $(".filter--insights.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".video-select", function() {
                // console.log("video");

                if ($(".filter--insights").hasClass("video-tagging")) {
                    $(".filter--insights.video-tagging").removeClass("d-none");
                    // console.log('filter insight inside111 video');

                    $(".filter--insights.article-tagging").addClass("d-none");
                    $(".filter--insights.podcast-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });

            $(document).on("click", ".podcast-select", function() {
                // console.log("podcast");

                if ($(".filter--insights").hasClass("podcast-tagging")) {
                    $(".filter--insights.podcast-tagging").removeClass("d-none");
                    // console.log('filter insight inside111 podcast');

                    $(".filter--insights.video-tagging").addClass("d-none");
                    $(".filter--insights.article-tagging").addClass("d-none");

                    $(".filter--cards-no-card").removeClass('d-block');
                    $(".filter--cards-no-card").addClass('d-none');
                    $(".load-more").addClass('d-block');
                    $(".load-more").removeClass('d-none');
                } else {
                    // console.log('filter insight else');
                    $(".filter--cards").addClass('d-none');

                    $(".filter--cards-no-card").removeClass('d-none');
                    $(".filter--cards-no-card").addClass('d-block');
                    $(".load-more").addClass('d-none');
                    $(".load-more").removeClass('d-block');
                }

            });
        } else {
            // console.log('filter insight else');
            $(".filter--cards").addClass('d-none');
        }
    }

    // datepicker function
    $(function() {
        const labelDateRange = $("label.date-range label[for='dates']");
        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            "drops": "auto",
            locale: {
                cancelLabel: 'Clear Selection',
                format: 'DD/MM/YYYY'
            },
        });

        $(document).on('click', 'input[name="datefilter"]', function() {
            labelDateRange.addClass('selected');

            var value = document.getElementById('dates').value;
            if (value === '') {
                labelDateRange.removeClass('selected');
            } else {}
        });

        $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            labelDateRange.addClass('selected');
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
            labelDateRange.toggleClass('selected');
        });

    });

    $(window).on("load", function() {
        $('.mainbnrslider-nav').slick('refresh');
        $('.mainbnrslider-for').slick('refresh');
    });
    // $('.mainbnrslider-for').slick({
    //   infinite: true,
    //   fade: true,
    //   dots: false,
    //   arrows: false,
    //   asNavFor: '.mainbnrslider-nav',
    //   speed: 800,
    //   // autoplay: true,
    //   // centerMode: true,
    //   // cssEase: 'linear',
    //   // focusOnSelect: true,
    //   accessibility: false,
    //   draggable: false,
    //   swipe: false,
    //   touchMove: false,
    //   pauseOnHover: false,
    //   pauseOnFocus: false,
    //   pauseOnDotsHover: false,
    // });
    $('.mainbnrslider-text').slick({
        infinite: true,
        fade: false,
        dots: false,
        arrows: false,
        asNavFor: '.mainbnrslider-nav',
        speed: 800,
        accessibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        vertical: true,
        verticalSwiping: true,
    });

    $('.mainbnrslider-fade').slick({
        infinite: true,
        fade: true,
        dots: false,
        arrows: false,
        asNavFor: '.mainbnrslider-nav',
        speed: 800,
        // autoplay: true,
        // centerMode: true,
        // cssEase: 'linear',
        // focusOnSelect: true,
        accessibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });

    $('.mainbnrslider-nav').slick({
        infinite: true,
        arrows: false,
        dots: false,
        asNavFor: '.mainbnrslider-for',
        // cssEase: 'linear',
        // focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        speed: 800,
        autoplay: true,
        accessibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    });


    $('#filter_homepage input[type="checkbox"]').on('change', function() {
        $('#filter_homepage input[type="checkbox"]').not(this).prop('checked', false);

    });

    $("#filter_homepage button.uncheckall").on('click', function() {
        // $('#filter_homepage input[type="checkbox"]').removeAttr('checked');
        $('#filter_homepage input[type="checkbox"]').prop('checked', false);
        $('.mainbnrslider-nav').slick('slickPlay');
    });




    $(document).on("click", ".mainbnrslider-nav", function() {
        // $(".dropdown-content").toggle();
        if ($(".dropdown-content").hasClass("d-none")) {
            $(".dropdown-content").removeClass("d-none");
            $(".dropdown-content").addClass("open");
            $(".dropdown-content").addClass("d-block");
        } else {
            $(".dropdown-content").addClass("d-none");
            $(".dropdown-content").removeClass("d-block");
            $(".dropdown-content").removeClass("open");
        }
    });

    $(document).on("click", "#myDropdown", function() {
        // $(".dropdown-content").toggle();
        // $(".dropdown-content").toggle();
        if ($(".dropdown-content").hasClass("d-none")) {
            $(".dropdown-content").removeClass("d-none");
            $(".dropdown-content").addClass("open");
            $(".dropdown-content").addClass("d-block");
        } else {
            $(".dropdown-content").addClass("d-none");
            $(".dropdown-content").removeClass("d-block");
            $(".dropdown-content").removeClass("open");
        }
    });

    function myFunction(el) {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        // setTimeout(() => {
        //   popup.classList.remove("show");
        // }, 10000)

        setTimeout(function() {
            popup.classList.remove("show");
        }, 2000);
    }

    $(document).on("click", ".bookmarks", function() {
        // console.log('bookmark');

        if ($(".bookmarks").is(':checked')) {
            console.log('bookmark');
            setTimeout(function() {
                $(".checkeding").addClass("d-none");
                $(".checkeding").removeClass("d-block");
                $(".show1").addClass("d-none");
                $(".show1").removeClass("d-block");
                // $(".bookmarks").attr("disabled", true);
            }, 2000);

            // $(".bookmarks").attr("disabled", true);
            $(".checkeding").addClass("d-block");
            $(".checkeding").removeClass("d-none");
            $(".show1").addClass("d-block");
            $(".show1").removeClass("d-none");
        } else {
            console.log('bookmark uncheked');
            setTimeout(function() {
                $(".uncheckeding").addClass("d-none");
                $(".uncheckeding").removeClass("d-block");
                $(".show2").addClass("d-none");
                $(".show2").removeClass("d-block");
                // $(".bookmarks").attr("disabled", true);
            }, 2000);

            // $(".bookmarks").attr("enabled", true);
            $(".uncheckeding").addClass("d-block");
            $(".uncheckeding").removeClass("d-none");
            $(".show2").addClass("d-block");
            $(".show2").removeClass("d-none");
        }
    });



    $("#search").on('keyup', function(e) {
        $(".trendingsearch--content").addClass('d-none');
        $(".dummysearch--content").removeClass('d-none');
        console.log('search');


        var inputValue = $(this).val();
        if (inputValue === "tech") {
            console.log('search working');
            console.log(inputValue);
            $(".dummysearch--content").removeClass('d-none');
            $(".trendingsearch--content").addClass('d-none');
        }
    });

    // $(document).on("click", "#dates", function () {
    //   console.log("hello");
    //   const datess = $("#dates");
    //   datess.addClass("selected");

    //   const targetOptions1 = $(elm.target.selectedOptions);
    //   if (targetOptions1.length === 0) {
    //     datess.removeClass('selected');
    //   }
    // });

    $('#dates').on('input', function() {
        $(this).parent().toggleClass('is-empty', this.value.trim().length == 0);
        console.log("hello");
    });
}(jQuery));