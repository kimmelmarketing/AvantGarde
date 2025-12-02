import React, { useEffect, useRef } from 'react';

const BookingWidget: React.FC = () => {
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://widget.simplybook.me/v2/widget/widget.js";
        script.type = "text/javascript";
        
        script.onload = () => {
            // Access via window to avoid TypeScript global declaration issues
            const SimplybookWidget = (window as any).SimplybookWidget;
            
            if (SimplybookWidget) {
                new SimplybookWidget({
                    "widget_type": "iframe",
                    "url": "https://avantgardebh.simplybook.me",
                    "theme": "default",
                    "theme_settings": {
                        "timeline_hide_unavailable": "1",
                        "hide_past_days": "0",
                        "timeline_show_end_time": "0",
                        "timeline_modern_display": "as_slots",
                        "sb_base_color": "#111111",
                        "display_item_mode": "block",
                        "booking_nav_bg_color": "#f5f5f5",
                        "body_bg_color": "#f2f2f2",
                        "sb_review_image": "",
                        "dark_font_color": "#474747",
                        "light_font_color": "#ffffff",
                        "btn_color_1": "#111111",
                        "sb_company_label_color": "#ffffff",
                        "hide_img_mode": "1",
                        "show_sidebar": "1",
                        "sb_busy": "#c7b3b3",
                        "sb_available": "#d6ebff"
                    },
                    "timeline": "modern",
                    "datepicker": "top_calendar",
                    "is_rtl": false,
                    "app_config": {
                        "clear_session": 0,
                        "allow_switch_to_ada": 0,
                        "predefined": []
                    },
                    "container_id": "sbw_b64901"
                });
            }
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_b64901" ref={widgetContainerRef} className="w-full"></div>
    );
}

export default BookingWidget;