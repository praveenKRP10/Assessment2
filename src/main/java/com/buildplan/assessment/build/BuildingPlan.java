package com.buildplan.assessment.build;

public class BuildingPlan {
    private int width;
    private int height;
    private Room[][] rooms;

    public BuildingPlan(int width, int height) {
        this.width = width;
        this.height = height;
        this.rooms = new Room[width][height];
    }

    public void addRoom(Room room) {
        rooms[room.getX()][room.getY()] = room;
    }

    public Room getRoom(int x, int y) {
        return rooms[x][y];
    }
}
