import { useMemo, useRef, useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { Timer } from "timer-node";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  Box,
  Text,
  Button,
  Heading,
  Icon,
  Divider,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Timers = () => {
  const intervalRef = useRef();
  const [currentTime, setCurrentTime] = useState(null);
  const [logTime, setLogTime] = useState(0);
  const [currentTask, setCurrentTask] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const { tasks, times, addTime, updateTime, deleteTime } = useProjects();

  const newTimer = useRef(new Timer());

  const activeTask = tasks.find((task) => task.id === currentTask);

  const handleClickAdd = async () => {
    const timeData = {
      id: uuid(),
      taskId: currentTask,
      Stopped: 0,
      timerStart: Date.now(),
    };
    await addTime(timeData);
    newTimer.current.start();
    Started();
    setCurrentTime(timeData);
	setIsShown(true);
  };

  const handleCurrentTask = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleStop = async (timeData) => {
    await updateTime(currentTime.id, timeData);
    Stopped();
	setIsShown(false);
  };

  const Started = async () => {
    const now = setInterval(() => {
      setLogTime(newTimer.current.ms());
    }, null);
    intervalRef.current = now;
  };

  const Stopped = async () => {
    newTimer.current.stop();
    clearInterval(intervalRef.current);
    setLogTime(null);
  };

  const handleClickDelete = async (id) => {
    await deleteTime(id);
  };
/* 
  const addButto = {} */
  const totalTime = useMemo(
    () => {
     
      const Tot = times
        .filter((time) => time.taskId === currentTask && time.Stopped)
        .reduce((sum, current) => {
          return sum + (current.Stopped - current.timerStart);
        }, null);
      return Tot; 
    } 
  );

  const showTotal = useMemo(() => {
    return dayjs.duration(logTime + totalTime).format("HH:mm:ss:SSS");
  }, [totalTime, logTime]);
  return (
    <>
      <Heading display={"flex"} justifyContent={"center"}>
        Timer
      </Heading>
      <Container>
        {activeTask && (
          <Box
            align="center"
            zIndex={80}
            justify="center"
            bg="black"
            color={"white"}
            pos="fixed"
          >
            <Text>{`Active task: ${activeTask.name}`}</Text>
            <Text>{`Total time: ${showTotal}`}</Text>
          </Box>
        )}
        {tasks &&
          tasks.map((task) => {
            const filterTimed = times.filter((time) => task.id === time.taskId);
            return (
              <Box gap="0.5em" marginBottom="10em" key={task.id}>
                {currentTask === task.id ? (
                  <Text
                    fontSize={"2xl"}
                    display={"flex"}
                    justifyContent={"center"}
                    backgroundColor={"green"}
                    fontWeight={800}
                    color={"white"}
                  >
                    {task.name}
                  </Text>
                ) : (
                  <Text id={task.id} color={"gray"}>{task.name}</Text>
                )}

                {currentTask === task.id ? (
                  <></>
                ) : (
                  <Button value={task.id}  onClick={handleCurrentTask}>
                    Time {task.name}
                  </Button>
                )}

                {currentTask === task.id ? (
                  <>
                    <Box
                      key={task.id}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Button id={task.id} onClick={handleClickAdd}>Start</Button>
					  {isShown && (
                      <Button
                        onClick={() => handleStop({ Stopped: Date.now() })}
                      >
                        stop
                      </Button>)}
                    </Box>
                    <Heading size={"2em"}>
                      Hour/minutes/seconds/miliseconds
                    </Heading>

                    {filterTimed.map((time) => {
                      return (
                        <Box key={time.id} alignItems={"center"}>
                          <SimpleGrid rows={3} marginBottom={20}>
                            <Divider />
                            <Box display={"flex"} justifyContent={"center"}>
                              {dayjs
                                .duration(time.Stopped - time.timerStart)
                                .format(`HH:mm:ss:SSS`)}
                            </Box>

                            <Text display={"flex"} justifyContent={"flex-end"}>
                              started
                              {dayjs(time.timerStart).format(` YYYY/MM/DD `)} at
                              {dayjs(time.timerStart).format(` HH:mm:ss `)}
                            </Text>
                            

                            <Button onClick={() => handleClickDelete(time.id)}>
                              delete
                            </Button>
                          </SimpleGrid>
                        </Box>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </Box>
            );
          })}
      </Container>
      <Box>{/* Spacer */}-</Box>
    </>
  );
};

export default Timers;