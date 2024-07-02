"use strict"

const ui = {
    dimmerLogin: (isActive) => {
        const $busyDimmer = $(".ui.login.dimmer");
        if (isActive) {
            $busyDimmer.addClass("active");
        } else {
            $busyDimmer.removeClass("active");
        }
    },
    dimmerLogout: (isActive) => {
        const $busyDimmer = $(".ui.logout.dimmer");
        if (isActive) {
            $busyDimmer.addClass("active");
        } else {
            $busyDimmer.removeClass("active");
        }
    },
    dimmerCheckUpdate: (isActive) => {
        const $busyDimmer = $(".ui.dashboard .about.dimmer");
        if (isActive) {
            $busyDimmer.addClass("active");
        } else {
            $busyDimmer.removeClass("active");
        }
    },
    dimmerLoadCourses: (isActive) => {
        const $busyDimmer = $(".ui.dashboard .courses.dimmer");
        if (isActive) {
            $busyDimmer.addClass("active");
        } else {
            $busyDimmer.removeClass("active");
        }
    },
    dimmerPrepareDownload: (isActive) => {
        const $busyDimmer = $(".ui.dashboard .course.dimmer");
        if (isActive) {
            $busyDimmer.addClass("active");
        } else {
            $busyDimmer.removeClass("active");
        }
    },
    dimmerDownloads: (isActive) => {
        const $busyDimmer = $(".ui.dashboard .downloads.dimmer");
        if (isActive) {
            $busyDimmer.addClass("active");
        } else {
            $busyDimmer.removeClass("active");
        }
    },
    showModalUpdate: () => {
        $(".ui.update-available.modal").modal("show");
    },
    showDashboard: () => {
        $(".ui.login.grid").slideUp("fast");
        $(".ui.dashboard").fadeIn("fast").css("display", "flex");
    },
    resetToLogin: () => {
        $(".ui.dimmer").removeClass("active");
        $(".ui.dashboard .courses.items").empty();
        $(".content .ui.section").hide();
        $(".content .ui.courses.section").show();
        $(".sidebar").find(".active").removeClass("active purple");
        $(".sidebar").find(".courses-sidebar").addClass("active purple");
        $(".ui.login.grid").slideDown("fast");
        $(".ui.dashboard").fadeOut("fast");
    },
    toggleSubdomainField: (isVisible) => {
        const $subdomainField = $(".ui.login #divsubdomain");
        isVisible ? $subdomainField.show() : $subdomainField.hide();
    },
    get $subdomainField() {
        return $(".ui.login #subdomain");
    },
    get actionCardTemplate() {
        return `
            <div class="ui tiny icon action buttons">
            <button class="ui basic blue download button"><i class="download icon"></i></button>
            <button class="ui basic red disabled pause button"><i class="pause icon"></i></button>
            <button class="ui basic green disabled resume button"><i class="play icon"></i></button>

            <div style="height: 1px; width: 5px;"></div>

            <button class="ui basic yellow open-in-browser button"><i class="desktop icon"></i></button>
            <button class="ui basic teal open-dir button"><i class="folder open icon"></i></button>

            </div>
            <div class="ui horizontal divider"></div>
            <div class="ui tiny indicating individual progress">
            <div class="bar"></div>
            </div>
            <div class="ui horizontal divider"></div>
            <div class="ui small indicating combined progress">
            <div class="bar">
                <div class="progress"></div>
            </div>
            <div class="label">${translate("Building Course Data")}</div>
            </div>
            <div class="info-downloaded"></div>`;
    },
    prepareDownload: ($courseCard) => {
        $courseCard.find(".download-quality").html("").hide();
        $courseCard.find(".download-speed").hide();
        $courseCard.find(".combined.progress").progress("reset");
        $courseCard.find(".individual.progress").progress("reset");

        $courseCard.find(".download-error").hide();
        $courseCard.find(".course-encrypted").hide();
        $courseCard.find(".download-status").show();
        $courseCard.find(".info-downloaded").hide();
        $courseCard.find(".icon-encrypted").hide();
        $courseCard.find(".ui.tiny.image .tooltip").hide();
        $courseCard.find(".ui.tiny.image").removeClass("wrapper");
        $courseCard.find('input[name="encryptedvideos"]').val(0);
        $courseCard.css("padding-bottom", "25px")
    },
    showProgress: ($courseCard, shouldShow) => {
        const $progressElement = $courseCard.find(".ui.progress");
        shouldShow ? $progressElement.show() : $progressElement.hide();
    },
    enableDownloadButton: ($courseCard, isEnabled) => {
        const $downloadButton = $courseCard.find(".download.button");
        // $downloadButton.toggleClass("disabled", !isEnabled);
        if (isEnabled) {
            $downloadButton.removeClass("disabled");
        } else {
            $downloadButton.addClass("disabled");
        }
    },

};

module.exports = ui;