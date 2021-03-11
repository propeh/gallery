export const setGroups = (data) => {
    const groups = [[], [], []];
    const groupsHeight = [0, 0, 0];

    for(let i = 0; i < data.length; i++) {
        const width = data[i].width;
        const height = data[i].height;
        const ratioHeight = height / width;

        const minGroupsHeight = Math.min(...groupsHeight);
        const minHeightIndex = groupsHeight.indexOf(minGroupsHeight);

        groups[minHeightIndex].push(data[i]);
        groupsHeight[minHeightIndex] = groupsHeight[minHeightIndex] + ratioHeight;
    }

    return groups;
}