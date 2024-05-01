package com.buildplan.assessment.build;

public class BuildingPlanController {
    private BuildingPlan buildingPlan;
    private DrawingTool drawingTool;

    public BuildingPlanController(BuildingPlan buildingPlan) {
        this.buildingPlan = buildingPlan;
        this.drawingTool = new DrawingTool(buildingPlan);
    }

    public void handleDrawRoomRequest(int x, int y, int width, int height) {
        drawingTool.drawRoom(x, y, width, height);
    }

    public void handleAnnotateRoomRequest(int x, int y, String annotation) {
        drawingTool.annotateRoom(x, y, annotation);
    }
}
