 Y2Z Travel – Itinerary Planner (Drag-and-Drop)

✨ Features
🖱️ Drag-and-Drop Sorting: Smooth reordering of itinerary cards using native HTML5 drag events.

🎞️ Animated Transitions: Visual feedback and animated transitions while sorting.

📱 Responsive Design: Works seamlessly on both desktop and mobile devices.

💾 Persistent State: Card order is saved in localStorage to persist after reload.

🗺️ Interactive Map View: Integrated Leaflet map highlighting itinerary locations with markers.

🎥 Demo Video
📹 Watch 1-Minute Demo

In the video:

Shows how drag-and-drop works smoothly.

Explains the implementation logic.

Highlights the map interaction and localStorage.

⚙️ How It Works
The activity cards are loaded from a local JSON file.

Each card is made draggable using the native draggable attribute.

On dragStart, the index of the card is stored.

On dragOver, the dragged card is inserted before the hovered card.

Transitions and cursor styles give feedback.

Leaflet shows markers for major landmarks (e.g., India Gate, Red Fort, etc.).

The reordered card list is saved in localStorage.

📱 Responsive Behavior
On mobile, the map view is hidden for a cleaner experience.

Touch-friendly drag zones are included.
