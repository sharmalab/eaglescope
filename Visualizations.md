# Creating a Visualization

Broad strokes:
* extend BaseVisualization
* trigger this.filterIn for interactive filtering visualization (see Filters.md for format once we write that)
* updated data delivered through state.filteredData; unmodified data delivered through state.baseData
* export your class, and register in VisTypes.js if you want the selector to support it.
