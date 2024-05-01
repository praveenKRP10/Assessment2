package com.buildplan.assessment.build;
public class DrawingTool {
    private BuildingPlan buildingPlan;

    public DrawingTool(BuildingPlan buildingPlan) {
        this.buildingPlan = buildingPlan;
    }

    public void drawRoom(int x, int y, int width, int height) {
        Room room = new Room(x, y, width, height);
        buildingPlan.addRoom(room);
    }

    public void annotateRoom(int x, int y, String annotation) {
        Room room = buildingPlan.getRoom(x, y);
        if (room != null) {
            room.setAnnotation(annotation);
        }
    }
}
