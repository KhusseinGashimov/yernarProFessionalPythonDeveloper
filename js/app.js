    $(function() {
    
    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data("filter");
        
        if(cat == "all") {
            $("[data-cat]").removeClass("hide");
        } else {
    $("[data-cat]").each(function() {
           
            let workCat = $(this).data("cat");
            if(workCat != cat) {
                $(this).addClass("hide");
            } else {
                $(this).removeClass("hide");
            }
            
        });
        }
        
    });
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
       event.preventDefault();
       let $this = $(this);
       let modalId = $this.data("modal");
       $(modalId).addClass("show");
       $("body").addClass("noscroll");
       
       setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
       });
    }, 200);
    });
        
    modalClose.on("click", function(event) {
       event.preventDefault();
        
       let $this = $(this);
       let modalParent = $this.parents(".modals");
         modalParent.find(".modal__dialog").css({
                transform: "scale(0)"
       });
        setTimeout(function() {
        modalParent.removeClass("show");
        $("body").removeClass("noscroll");
       }, 200);
    });

     $(".modals").on("click", function(event) {
         let $this = $(this);
        $this.find(".modal__dialog").css({
                transform: "scale(0)"
       });
         setTimeout(function() {
        $this.removeClass("show");
        $("body").removeClass("noscroll");
       }, 200);
    });
     $(".modal__dialog").on("click", function(event) {
       event.stopPropagation();
    });
    
    
});