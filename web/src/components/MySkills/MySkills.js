const MySkills = () => {
  return (
    <div className="p-8 my-10 rounded-2xl shadow-lg bg-white max-w-xl text-lg">
      <h2 className="text-4xl font-bold">My Skills 👨‍💻</h2>
      <div>
        <h4>Primary Skills</h4>
        <div className="flex w-full">
          <div className="skill-icon">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
            />
          </div>
          <div className="skill-icon">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDEwMCAxMDAiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNyIgZmlsbD0iIzM5YzFkNyI+PC9jaXJjbGU+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDU4Yy00LjQxMSwwLTgtMy41ODktOC04czMuNTg5LTgsOC04czgsMy41ODksOCw4UzU0LjQxMSw1OCw1MCw1OHogTTUwLDQ0Yy0zLjMwOSwwLTYsMi42OTEtNiw2CXMyLjY5MSw2LDYsNnM2LTIuNjkxLDYtNlM1My4zMDksNDQsNTAsNDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM5YzFkNyIgZD0iTTg4LjUsNTBjMC01LjM3Ni02LjQ3NC0xMC4wMjktMTYuNTE4LTEyLjc5OGMyLjU4Mi0xMC4wOTYsMS43ODctMTguMDM1LTIuODI3LTIwLjcyOQljLTEuODItMS4wNjMtNC4wMjgtMS4yNTctNi41NjItMC41NzlDNTguNzc1LDE2LjkxNiw1NC40LDE5LjkwNCw1MCwyNC4yOTNjLTQuNC00LjM4OS04Ljc3NS03LjM3Ni0xMi41OTMtOC4zOTkJYy0yLjUzNC0wLjY3OS00Ljc0Mi0wLjQ4NC02LjU2MiwwLjU3OWMtNC42MTQsMi42OTQtNS40MDksMTAuNjMyLTIuODI3LDIwLjcyOUMxNy45NzQsMzkuOTcxLDExLjUsNDQuNjI0LDExLjUsNTAJczYuNDc0LDEwLjAyOSwxNi41MTgsMTIuNzk5Yy0yLjU4MiwxMC4wOTYtMS43ODcsMTguMDM1LDIuODI3LDIwLjcyOWMxLjExMiwwLjY0OSwyLjM2OCwwLjk3NiwzLjc1NiwwLjk3NQljMC44ODMsMCwxLjgyLTAuMTMyLDIuODA2LTAuMzk2YzMuODE4LTEuMDIzLDguMTkzLTQuMDEsMTIuNTkzLTguMzk5YzQuNCw0LjM4OSw4Ljc3NSw3LjM3NiwxMi41OTMsOC4zOTkJYzAuOTg2LDAuMjY0LDEuOTIzLDAuMzk2LDIuODA2LDAuMzk2YzEuMzg4LDAsMi42NDQtMC4zMjUsMy43NTYtMC45NzVjNC42MTQtMi42OTQsNS40MDgtMTAuNjMzLDIuODI3LTIwLjcyOQlDODIuMDI2LDYwLjAyOSw4OC41LDU1LjM3Niw4OC41LDUweiBNNjMuMzY5LDE4Ljc5MWMwLjcyNS0wLjE5MywxLjM5Ny0wLjI5MSwyLjAxNi0wLjI5MWMwLjg2LDAsMS42MTYsMC4xODgsMi4yNTcsMC41NjMJYzMuMDkyLDEuODA2LDMuNzIzLDguNDIsMS40MiwxNy40MTFjLTMuMTczLTAuNzE0LTYuNjM1LTEuMjUxLTEwLjMxNC0xLjU4M2MtMi4xNTktMy4xMTMtNC40MDUtNS45NDctNi42NjgtOC40MjkJQzU2LjA5OCwyMi40MzUsNjAuMDQsMTkuNjgzLDYzLjM2OSwxOC43OTF6IE02MC43NTUsNTYuMjk5Yy0xLjE3OSwyLjA2Ni0yLjQyLDQuMDQ1LTMuNjkzLDUuOTM5QzU0LjgwMiw2Mi40MDcsNTIuNDQ2LDYyLjUsNTAsNjIuNQlzLTQuODAyLTAuMDkzLTcuMDYxLTAuMjYyYy0xLjI3My0xLjg5NC0yLjUxNC0zLjg3My0zLjY5My01LjkzOWMtMS4yMTktMi4xMzYtMi4zMTMtNC4yNC0zLjI5My02LjI5OAljMC45OC0yLjA1OCwyLjA3NC00LjE2MiwzLjI5My02LjI5OWMxLjE4LTIuMDY3LDIuNDItNC4wNDYsMy42OTQtNS45NEM0NS4xOTksMzcuNTkzLDQ3LjU1NCwzNy41LDUwLDM3LjVzNC44MDEsMC4wOTMsNy4wNjEsMC4yNjIJYzEuMjczLDEuODk0LDIuNTE0LDMuODc0LDMuNjk0LDUuOTRjMS4yMTksMi4xMzYsMi4zMTMsNC4yNCwzLjI5Myw2LjI5OUM2My4wNjgsNTIuMDU5LDYxLjk3NCw1NC4xNjMsNjAuNzU1LDU2LjI5OXogTTY1LjY0NCw1My41NDVjMS4wNDEsMi40NjEsMS45MDEsNC44MywyLjU5Nyw3LjA4MmMtMi4yNzUsMC41MDctNC43MzEsMC45My03LjM1NCwxLjI0M2MwLjg0Mi0xLjMyNiwxLjY3Mi0yLjY4MiwyLjQ3My00LjA4NQlDNjQuMTcxLDU2LjM2Niw2NC45MjgsNTQuOTUxLDY1LjY0NCw1My41NDV6IE01MCw3MS4zNTdjLTEuNjM2LTEuODA5LTMuMjY5LTMuODEyLTQuODY0LTUuOTc5QzQ2LjcyOCw2NS40NTUsNDguMzQ4LDY1LjUsNTAsNjUuNQlzMy4yNzItMC4wNDUsNC44NjQtMC4xMjJDNTMuMjY5LDY3LjU0NCw1MS42MzYsNjkuNTQ3LDUwLDcxLjM1N3ogTTM5LjExMiw2MS44N2MtMi42MjItMC4zMTMtNS4wNzktMC43MzYtNy4zNTQtMS4yNDMJYzAuNjk2LTIuMjUyLDEuNTU2LTQuNjIyLDIuNTk3LTcuMDgyYzAuNzE2LDEuNDA2LDEuNDc0LDIuODIxLDIuMjg0LDQuMjRDMzcuNDQxLDU5LjE4OSwzOC4yNyw2MC41NDUsMzkuMTEyLDYxLjg3eiBNMzQuMzU2LDQ2LjQ1NgljLTEuMDQxLTIuNDYxLTEuOTAyLTQuODMxLTIuNTk3LTcuMDg0YzIuMjc1LTAuNTA3LDQuNzMyLTAuOTMsNy4zNTUtMS4yNDNjLTAuODQzLDEuMzI2LTEuNjcyLDIuNjgzLTIuNDczLDQuMDg2CUMzNS44MjksNDMuNjM1LDM1LjA3Miw0NS4wNSwzNC4zNTYsNDYuNDU2eiBNNTAsMjguNjQ0YzEuNjM2LDEuODA5LDMuMjY5LDMuODEyLDQuODY0LDUuOTc5QzUzLjI3MiwzNC41NDUsNTEuNjUyLDM0LjUsNTAsMzQuNQlzLTMuMjcyLDAuMDQ1LTQuODY0LDAuMTIyQzQ2LjczMSwzMi40NTYsNDguMzY0LDMwLjQ1Myw1MCwyOC42NDR6IE02My4zNiw0Mi4yMTZjLTAuODAxLTEuNDA0LTEuNjMxLTIuNzYtMi40NzMtNC4wODYJYzIuNjIzLDAuMzEzLDUuMDc5LDAuNzM2LDcuMzU1LDEuMjQzYy0wLjY5NiwyLjI1My0xLjU1Niw0LjYyMi0yLjU5Nyw3LjA4NEM2NC45MjgsNDUuMDUsNjQuMTcxLDQzLjYzNSw2My4zNiw0Mi4yMTZ6IE0zMi4zNTgsMTkuMDYzQzMzLDE4LjY4OCwzMy43NTQsMTguNSwzNC42MTUsMTguNWMwLjYxOCwwLDEuMjkyLDAuMDk4LDIuMDE2LDAuMjkxYzMuMzI5LDAuODkyLDcuMjcxLDMuNjQzLDExLjI4OSw3LjY3CWMtMi4yNjMsMi40ODItNC41MDksNS4zMTctNi42NjgsOC40MjljLTMuNjc5LDAuMzMyLTcuMTQyLDAuODY5LTEwLjMxNCwxLjU4M0MyOC42MzUsMjcuNDgyLDI5LjI2NiwyMC44NjgsMzIuMzU4LDE5LjA2M3ogTTE0LjUsNTAJYzAtMy41OTYsNS40MDEtNy40NCwxNC4zMzUtOS45MDFjMC45NjksMy4xNTksMi4yNDEsNi40ODYsMy44MDYsOS45MDFjLTEuNTY1LDMuNDE1LTIuODM3LDYuNzQyLTMuODA2LDkuOTAxCUMxOS45MDEsNTcuNDQsMTQuNSw1My41OTYsMTQuNSw1MHogTTM2LjYzMSw4MS4yMDljLTEuNzMzLDAuNDYyLTMuMTcsMC4zNzEtNC4yNzMtMC4yNzFjLTMuMDkyLTEuODA2LTMuNzIyLTguNDItMS40Mi0xNy40MTEJYzMuMTcyLDAuNzE0LDYuNjM1LDEuMjUxLDEwLjMxMywxLjU4M2MyLjE1OSwzLjExMyw0LjQwNSw1Ljk0Nyw2LjY2OCw4LjQzQzQzLjkwMiw3Ny41NjYsMzkuOTYsODAuMzE3LDM2LjYzMSw4MS4yMDl6IE02Ny42NDIsODAuOTM4Yy0xLjEwMywwLjY0NC0yLjUzOSwwLjczNC00LjI3MywwLjI3MWMtMy4zMjktMC44OTItNy4yNzEtMy42NDMtMTEuMjg5LTcuNjdjMi4yNjMtMi40ODIsNC41MDktNS4zMTcsNi42NjgtOC40MwljMy42NzktMC4zMzIsNy4xNDEtMC44NjksMTAuMzEzLTEuNTgzQzcxLjM2NSw3Mi41MTgsNzAuNzM0LDc5LjEzMiw2Ny42NDIsODAuOTM4eiBNNzEuMTY1LDU5LjkwMQljLTAuOTY5LTMuMTU5LTIuMjQxLTYuNDg2LTMuODA2LTkuOTAxYzEuNTY1LTMuNDE1LDIuODM3LTYuNzQzLDMuODA2LTkuOTAxQzgwLjA5OSw0Mi41Niw4NS41LDQ2LjQwNCw4NS41LDUwCVM4MC4wOTksNTcuNDQsNzEuMTY1LDU5LjkwMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNMzQuNTk1LDg1LjAwMmMtMS40NzEsMC0yLjgxNy0wLjM1MS00LjAwMS0xLjA0M2MtNC42MzItMi43MDUtNS43ODMtMTAuMjc2LTMuMTc4LTIwLjgxMQlDMTYuOTc1LDYwLjE3OSwxMSw1NS40LDExLDUwczUuOTc1LTEwLjE3OSwxNi40MTUtMTMuMTQ4Yy0yLjYwNC0xMC41MzUtMS40NTMtMTguMTA2LDMuMTc5LTIwLjgxMQljMS45MzgtMS4xMzQsNC4yNzMtMS4zNDYsNi45NDMtMC42M2MzLjcxOCwwLjk5Niw4LjAyLDMuODIsMTIuNDYzLDguMTc5YzQuNDQ0LTQuMzU5LDguNzQ2LTcuMTgzLDEyLjQ2My04LjE3OQljMi42NjktMC43MTQsNS4wMDUtMC41MDIsNi45NDQsMC42M2M0LjYzMSwyLjcwNSw1Ljc4MiwxMC4yNzYsMy4xNzgsMjAuODExQzgzLjAyNSwzOS44MjEsODksNDQuNiw4OSw1MAlzLTUuOTc1LDEwLjE3OS0xNi40MTUsMTMuMTQ4YzIuNjA0LDEwLjUzNSwxLjQ1NCwxOC4xMDUtMy4xNzgsMjAuODExYy0xLjkyNywxLjEyNS00LjI4NiwxLjM0Mi02Ljk0MywwLjYzCWMtMy43MTktMC45OTYtOC4wMjEtMy44Mi0xMi40NjQtOC4xNzhjLTQuNDQzLDQuMzU4LTguNzQ1LDcuMTgzLTEyLjQ2Myw4LjE3OGMtMS4wMjMsMC4yNzQtMi4wMTEsMC40MTMtMi45MzYsMC40MTMJQzM0LjU5OSw4NS4wMDIsMzQuNTk3LDg1LjAwMiwzNC41OTUsODUuMDAyeiBNMzQuNjA0LDE1Ljk5OWMtMS4zMDEsMC0yLjQ3NCwwLjMwMi0zLjUwNywwLjkwNgljLTQuMjI0LDIuNDY3LTUuMTk0LDEwLjAwOC0yLjU5NSwyMC4xNzNjMC4wNjcsMC4yNjQtMC4wODksMC41MzQtMC4zNTIsMC42MDZDMTguMDM4LDQwLjQ3MiwxMiw0NS4wNzcsMTIsNTAJczYuMDM4LDkuNTI4LDE2LjE1MSwxMi4zMTZjMC4yNjMsMC4wNzIsMC40MTksMC4zNDIsMC4zNTIsMC42MDZjLTIuNiwxMC4xNjUtMS42MywxNy43MDcsMi41OTQsMjAuMTczCWMxLjAzLDAuNjAxLDIuMjA3LDAuOTA2LDMuNDk4LDAuOTA2YzAuMDAyLDAsMC4wMDQsMCwwLjAwNiwwYzAuODM4LDAsMS43MzgtMC4xMjcsMi42NzctMC4zNzhjMy42NDctMC45NzcsNy45MjUtMy44MzYsMTIuMzY5LTguMjcJYzAuMTk1LTAuMTk0LDAuNTExLTAuMTk0LDAuNzA2LDBjNC40NDQsNC40MzMsOC43MjIsNy4yOTIsMTIuMzY5LDguMjdjMi4zOTQsMC42MzksNC40ODUsMC40NjEsNi4xODEtMC41MjgJYzQuMjI0LTIuNDY3LDUuMTk0LTEwLjAwOCwyLjU5NC0yMC4xNzNjLTAuMDY3LTAuMjY0LDAuMDg5LTAuNTM0LDAuMzUyLTAuNjA2QzgxLjk2Miw1OS41MjgsODgsNTQuOTIzLDg4LDUwCXMtNi4wMzgtOS41MjgtMTYuMTUxLTEyLjMxNmMtMC4yNjMtMC4wNzItMC40MTktMC4zNDItMC4zNTItMC42MDZjMi41OTktMTAuMTY1LDEuNjI5LTE3LjcwNy0yLjU5NS0yMC4xNzMJYy0xLjY5OS0wLjk5My0zLjc3OS0xLjE3LTYuMTgxLTAuNTI4Yy0zLjY0NywwLjk3Ny03LjkyNCwzLjgzNi0xMi4zNjksOC4yN2MtMC4xOTUsMC4xOTQtMC41MTEsMC4xOTQtMC43MDYsMAljLTQuNDQ1LTQuNDM0LTguNzIyLTcuMjkzLTEyLjM2OS04LjI3QzM2LjMzNiwxNi4xMjUsMzUuNDQ0LDE1Ljk5OSwzNC42MDQsMTUuOTk5eiBNNjUuMzg2LDgxLjk5OQljLTAuNjYzLDAtMS4zNzktMC4xMDItMi4xNDYtMC4zMDdjLTMuMzMxLTAuODkzLTcuMzEyLTMuNTg5LTExLjUxNC03LjhjLTAuMTg4LTAuMTg5LTAuMTk1LTAuNDkzLTAuMDE2LTAuNjkJYzIuMjY1LTIuNDg0LDQuNDk0LTUuMzAzLDYuNjI3LTguMzc4YzAuMDg0LTAuMTIyLDAuMjE4LTAuMiwwLjM2Ni0wLjIxM2MzLjYxMi0wLjMyNiw3LjA2LTAuODU1LDEwLjI0OS0xLjU3MwljMC4yNjEtMC4wNTksMC41MjcsMC4xMDEsMC41OTQsMC4zNjRjMi4zMzYsOS4xMjMsMS43MDMsMTYuMDA4LTEuNjUyLDE3Ljk2N2wwLDBDNjcuMTc1LDgxLjc4OSw2Ni4zMzYsODEuOTk5LDY1LjM4Niw4MS45OTl6IE01Mi43NzEsNzMuNTIxYzMuOTUxLDMuODk0LDcuNjUzLDYuMzgxLDEwLjcyNyw3LjIwNWMxLjU5OSwwLjQyNywyLjkwOSwwLjM1MywzLjg5Mi0wLjIybDAsMAljMi44NTUtMS42NjgsMy4zNTctOC4wNzMsMS4zMDYtMTYuMzg3Yy0zLjAyOCwwLjY1OS02LjI3NywxLjE1Mi05LjY3LDEuNDY3QzU3LjAxLDY4LjQ3OCw1NC45MDgsNzEuMTQ0LDUyLjc3MSw3My41MjF6IE0zNC42MTQsODEuOTk5Yy0wLjk1LDAtMS43ODktMC4yMS0yLjUwOC0wLjYyOWMtMy4zNTUtMS45Ni0zLjk4OS04Ljg0NS0xLjY1Mi0xNy45NjhjMC4wNjctMC4yNjIsMC4zMzMtMC40MTksMC41OTQtMC4zNjQJYzMuMTg4LDAuNzE4LDYuNjM2LDEuMjQ3LDEwLjI0OSwxLjU3M2MwLjE0NywwLjAxMywwLjI4MiwwLjA5MSwwLjM2NiwwLjIxM2MyLjEzMywzLjA3NSw0LjM2Miw1Ljg5NCw2LjYyNyw4LjM3OAljMC4xOCwwLjE5NywwLjE3MywwLjUwMS0wLjAxNiwwLjY5Yy00LjIwMiw0LjIxLTguMTgzLDYuOTA3LTExLjUxMyw3LjhoMEMzNS45OTMsODEuODk2LDM1LjI3Niw4MS45OTksMzQuNjE0LDgxLjk5OXogTTMxLjMwNCw2NC4xMTljLTIuMDUxLDguMzEzLTEuNTQ5LDE0LjcxOSwxLjMwNiwxNi4zODdjMC45ODIsMC41NzIsMi4yOTIsMC42NDcsMy44OTIsMC4yMmwwLDAJYzMuMDc0LTAuODI0LDYuNzc2LTMuMzEyLDEwLjcyNy03LjIwNWMtMi4xMzYtMi4zNzctNC4yMzgtNS4wNDMtNi4yNTQtNy45MzVDMzcuNTgyLDY1LjI3MSwzNC4zMzIsNjQuNzc4LDMxLjMwNCw2NC4xMTl6IE01MCw3MS44NTZjLTAuMTQxLDAtMC4yNzYtMC4wNi0wLjM3MS0wLjE2NWMtMS42NjMtMS44MzktMy4zMS0zLjg2NC00Ljg5Ni02LjAxOGMtMC4xMTQtMC4xNTUtMC4xMjktMC4zNjMtMC4wMzgtMC41MzMJYzAuMDkxLTAuMTcsMC4yNjEtMC4yNzQsMC40NjUtMC4yNjNjMy4zMDYsMC4xNjEsNi4zNzQsMC4xNjEsOS42OCwwYzAuMi0wLjAxMiwwLjM3NCwwLjA5MywwLjQ2NSwwLjI2MwljMC4wOTEsMC4xNywwLjA3NywwLjM3Ny0wLjAzOCwwLjUzM2MtMS41ODYsMi4xNTMtMy4yMzMsNC4xNzgtNC44OTYsNi4wMThDNTAuMjc2LDcxLjc5Niw1MC4xNDEsNzEuODU2LDUwLDcxLjg1NnogTTQ2LjE2Nyw2NS45MjQJYzEuMjUxLDEuNjU1LDIuNTM3LDMuMjI2LDMuODMzLDQuNjg0YzEuMjk3LTEuNDU4LDIuNTgyLTMuMDI4LDMuODMzLTQuNjg0QzUxLjIyMSw2Ni4wMjQsNDguNzc5LDY2LjAyNCw0Ni4xNjcsNjUuOTI0eiBNNTAsNjMJYy0yLjM2OSwwLTQuNzU3LTAuMDg4LTcuMDk5LTAuMjYzYy0wLjE1My0wLjAxMS0wLjI5Mi0wLjA5Mi0wLjM3OC0wLjIyYy0xLjMzNy0xLjk4OS0yLjU4Ni0zLjk5OC0zLjcxMi01Ljk3CWMtMS4xOC0yLjA2OC0yLjI5NC00LjE5OC0zLjMxLTYuMzMyYy0wLjA2NS0wLjEzNi0wLjA2NS0wLjI5NCwwLTAuNDNjMS4wMTYtMi4xMzQsMi4xMy00LjI2NCwzLjMxLTYuMzMyCWMxLjEyNS0xLjk3LDIuMzc0LTMuOTc5LDMuNzEzLTUuOTcxYzAuMDg1LTAuMTI3LDAuMjI1LTAuMjA4LDAuMzc4LTAuMjJjNC42ODQtMC4zNSw5LjUxMy0wLjM1LDE0LjE5NiwwCWMwLjE1MywwLjAxMSwwLjI5MiwwLjA5MiwwLjM3OCwwLjIyYzEuMzM5LDEuOTkyLDIuNTg4LDQuMDAxLDMuNzEzLDUuOTcxYzEuMTgsMi4wNjgsMi4yOTQsNC4xOTgsMy4zMSw2LjMzMgljMC4wNjUsMC4xMzYsMC4wNjUsMC4yOTQsMCwwLjQzYy0xLjAxNiwyLjEzNC0yLjEzLDQuMjY0LTMuMzEsNi4zMzJsMCwwYy0xLjEyNiwxLjk3Mi0yLjM3NSwzLjk4MS0zLjcxMiw1Ljk3CWMtMC4wODUsMC4xMjctMC4yMjUsMC4yMDgtMC4zNzgsMC4yMkM1NC43NTcsNjIuOTEyLDUyLjM2OSw2Myw1MCw2M3ogTTQzLjIxOCw2MS43NTdjNC40NzksMC4zMjIsOS4wODUsMC4zMjIsMTMuNTYzLDAJYzEuMjczLTEuOTAzLDIuNDYzLTMuODIyLDMuNTM5LTUuNzA3YzEuMTI4LTEuOTc3LDIuMTk1LTQuMDExLDMuMTczLTYuMDVjLTAuOTc4LTIuMDM5LTIuMDQ1LTQuMDc0LTMuMTczLTYuMDUJYy0xLjA3NS0xLjg4My0yLjI2NS0zLjgwMi0zLjU0LTUuNzA4Yy00LjQ3OS0wLjMyMi05LjA4NC0wLjMyMi0xMy41NjMsMGMtMS4yNzQsMS45MDYtMi40NjUsMy44MjUtMy41NCw1LjcwOAljLTEuMTI4LDEuOTc3LTIuMTk1LDQuMDExLTMuMTczLDYuMDVjMC45NzgsMi4wMzksMi4wNDUsNC4wNzQsMy4xNzMsNi4wNUM0MC43NTUsNTcuOTM2LDQxLjk0NSw1OS44NTQsNDMuMjE4LDYxLjc1N3ogTTYwLjg4OCw2Mi4zNzFjLTAuMTcsMC0wLjMzMS0wLjA4Ny0wLjQyMy0wLjIzM2MtMC4xMDMtMC4xNjQtMC4xMDItMC4zNzIsMC4wMDEtMC41MzVjMC45MjgtMS40NjEsMS43MzMtMi43OTEsMi40Ni00LjA2NQljMC43NjQtMS4zMzgsMS41MjgtMi43NTgsMi4yNzMtNC4yMTljMC4wODgtMC4xNzMsMC4yNzMtMC4yNzYsMC40NjMtMC4yNzJjMC4xOTQsMC4wMDcsMC4zNjcsMC4xMjUsMC40NDMsMC4zMDUJYzEuMDE1LDIuMzk5LDEuODk0LDQuNzk4LDIuNjE0LDcuMTI5YzAuMDQyLDAuMTMzLDAuMDI1LDAuMjc4LTAuMDQ1LDAuMzk4Yy0wLjA3LDAuMTIxLTAuMTg4LDAuMjA3LTAuMzI0LDAuMjM3CWMtMi4zNSwwLjUyNS00Ljg0MSwwLjk0Ni03LjQwMywxLjI1MkM2MC45MjcsNjIuMzcsNjAuOTA3LDYyLjM3MSw2MC44ODgsNjIuMzcxeiBNNjUuNTk2LDU0LjczMQljLTAuNTk0LDEuMTM4LTEuMTk4LDIuMjQ1LTEuODAxLDMuMzAyYy0wLjU4MywxLjAyMi0xLjIxNiwyLjA3OS0xLjkyLDMuMjA5YzEuOTctMC4yNjIsMy44OS0wLjU5Myw1LjcyNy0wLjk4NwlDNjcuMDI1LDU4LjQ0MSw2Ni4zNTMsNTYuNTksNjUuNTk2LDU0LjczMXogTTM5LjExMiw2Mi4zNzFjLTAuMDIsMC0wLjA0LTAuMDAxLTAuMDYtMC4wMDNDMzYuNDkxLDYyLjA2MSwzNCw2MS42NCwzMS42NSw2MS4xMTUJYy0wLjEzNi0wLjAzLTAuMjUzLTAuMTE2LTAuMzI0LTAuMjM3Yy0wLjA3LTAuMTIxLTAuMDg2LTAuMjY1LTAuMDQ1LTAuMzk4YzAuNzItMi4zMzIsMS41OTktNC43MywyLjYxNC03LjEyOQljMC4wNzYtMC4xNzksMC4yNDktMC4yOTgsMC40NDMtMC4zMDVjMC4xODItMC4wMTksMC4zNzUsMC4wOTksMC40NjMsMC4yNzJjMC43NDUsMS40NjEsMS41MDksMi44ODEsMi4yNzMsNC4yMTkJYzAuNzI4LDEuMjc0LDEuNTMzLDIuNjA0LDIuNDYsNC4wNjVjMC4xMDQsMC4xNjMsMC4xMDQsMC4zNzEsMC4wMDEsMC41MzVDMzkuNDQzLDYyLjI4NCwzOS4yODMsNjIuMzcxLDM5LjExMiw2Mi4zNzF6IE0zMi4zOTksNjAuMjU1YzEuODM3LDAuMzk0LDMuNzU3LDAuNzI1LDUuNzI3LDAuOTg3Yy0wLjcwNS0xLjEzLTEuMzM3LTIuMTg3LTEuOTItMy4yMDljLTAuNjA0LTEuMDU3LTEuMjA3LTIuMTY1LTEuODAxLTMuMzAyCUMzMy42NDcsNTYuNTksMzIuOTc1LDU4LjQ0MSwzMi4zOTksNjAuMjU1eiBNNzEuMTY1LDYwLjQwMWMtMC4yMTUsMC0wLjQxMi0wLjEzOS0wLjQ3OC0wLjM1NGMtMC45NzUtMy4xNzktMi4yNDgtNi40ODktMy43ODItOS44MzgJYy0wLjA2MS0wLjEzMi0wLjA2MS0wLjI4NSwwLTAuNDE3YzEuNTM0LTMuMzQ5LDIuODA3LTYuNjYsMy43ODMtOS44NGMwLjA4LTAuMjU5LDAuMzU0LTAuNDA0LDAuNjExLTAuMzM1CUM4MC4zNjcsNDIuMTE2LDg2LDQ2LjA5NCw4Niw1MHMtNS42MzQsNy44ODQtMTQuNzAzLDEwLjM4M0M3MS4yNTMsNjAuMzk1LDcxLjIwOCw2MC40MDEsNzEuMTY1LDYwLjQwMXogTTY3LjkwOSw1MAljMS40MzYsMy4xNTUsMi42NDMsNi4yNzcsMy41ODksOS4yODhDNzkuNzE3LDU2Ljk0NSw4NSw1My4zMjIsODUsNTBzLTUuMjgzLTYuOTQ1LTEzLjUwMi05LjI4OAlDNzAuNTUxLDQzLjcyNCw2OS4zNDQsNDYuODQ2LDY3LjkwOSw1MHogTTI4LjgzNSw2MC40MDFjLTAuMDQ0LDAtMC4wODgtMC4wMDYtMC4xMzMtMC4wMThDMTkuNjM0LDU3Ljg4NCwxNCw1My45MDYsMTQsNTAJczUuNjMzLTcuODg0LDE0LjcwMi0xMC4zODNjMC4yNTgtMC4wNjksMC41MzEsMC4wNzYsMC42MTEsMC4zMzVjMC45NzYsMy4xOCwyLjI0OSw2LjQ5MSwzLjc4Myw5Ljg0CWMwLjA2MSwwLjEzMiwwLjA2MSwwLjI4NCwwLDAuNDE3Yy0xLjUzNSwzLjM1LTIuODA3LDYuNjYtMy43ODIsOS44MzhDMjkuMjQ4LDYwLjI2MiwyOS4wNSw2MC40MDEsMjguODM1LDYwLjQwMXogTTI4LjUwMiw0MC43MTIJQzIwLjI4Myw0My4wNTUsMTUsNDYuNjc4LDE1LDUwczUuMjgzLDYuOTQ1LDEzLjUwMiw5LjI4OGMwLjk0Ny0zLjAxMSwyLjE1My02LjEzMiwzLjU4OS05LjI4OAlDMzAuNjU2LDQ2Ljg0NiwyOS40NDksNDMuNzI0LDI4LjUwMiw0MC43MTJ6IE02NS42NDUsNDYuOTU3Yy0wLjE4OCwwLTAuMzYtMC4xMDUtMC40NDYtMC4yNzNjLTAuNzU3LTEuNDg4LTEuNTAxLTIuODY5LTIuMjcyLTQuMjIJbDAsMGMtMC43MjYtMS4yNzItMS41MzEtMi42MDItMi40NjEtNC4wNjZjLTAuMTA0LTAuMTYzLTAuMTA0LTAuMzcxLTAuMDAxLTAuNTM1YzAuMTAzLTAuMTYzLDAuMjg3LTAuMjUzLDAuNDgzLTAuMjMJYzIuNTYzLDAuMzA3LDUuMDU0LDAuNzI4LDcuNDA0LDEuMjUyYzAuMTM2LDAuMDMsMC4yNTMsMC4xMTYsMC4zMjQsMC4yMzdjMC4wNywwLjEyMSwwLjA4NiwwLjI2NSwwLjA0NSwwLjM5OAljLTAuNzIxLDIuMzM2LTEuNjAxLDQuNzM1LTIuNjE0LDcuMTMxYy0wLjA3NiwwLjE3OS0wLjI0OSwwLjI5OC0wLjQ0MywwLjMwNUM2NS42NTYsNDYuOTU3LDY1LjY1LDQ2Ljk1Nyw2NS42NDUsNDYuOTU3eiBNNjMuNzk0LDQxLjk2OGMwLjYxMSwxLjA3LDEuMjA1LDIuMTU4LDEuODAxLDMuMzAyYzAuNzU2LTEuODU2LDEuNDI4LTMuNzA5LDIuMDA1LTUuNTI1Yy0xLjgzNy0wLjM5NC0zLjc1Ny0wLjcyNS01LjcyOC0wLjk4NwlDNjIuNTgsMzkuODksNjMuMjEyLDQwLjk0Nyw2My43OTQsNDEuOTY4TDYzLjc5NCw0MS45Njh6IE0zNC4zNTUsNDYuOTU3Yy0wLjAwNiwwLTAuMDEyLDAtMC4wMTgsMAljLTAuMTk0LTAuMDA3LTAuMzY3LTAuMTI1LTAuNDQzLTAuMzA1Yy0xLjAxMy0yLjM5Ni0xLjg5My00Ljc5NS0yLjYxNC03LjEzMWMtMC4wNDItMC4xMzMtMC4wMjUtMC4yNzgsMC4wNDUtMC4zOTgJYzAuMDctMC4xMjEsMC4xODgtMC4yMDcsMC4zMjQtMC4yMzdjMi4zNS0wLjUyNSw0Ljg0MS0wLjk0Niw3LjQwNC0xLjI1MmMwLjE5NS0wLjAyLDAuMzgsMC4wNjcsMC40ODMsMC4yMwljMC4xMDMsMC4xNjQsMC4xMDIsMC4zNzItMC4wMDEsMC41MzVjLTAuOTMsMS40NjQtMS43MzUsMi43OTQtMi40NjEsNC4wNjZjLTAuNzcxLDEuMzUxLTEuNTE1LDIuNzMxLTIuMjcyLDQuMjIJQzM0LjcxNSw0Ni44NTIsMzQuNTQzLDQ2Ljk1NywzNC4zNTUsNDYuOTU3eiBNMzIuMzk5LDM5Ljc0NWMwLjU3NywxLjgxNiwxLjI1LDMuNjY5LDIuMDA1LDUuNTI1CWMwLjU5Ny0xLjE0NCwxLjE5LTIuMjMyLDEuODAxLTMuMzAyYzAuNTgzLTEuMDIxLDEuMjE1LTIuMDc4LDEuOTIxLTMuMjFDMzYuMTU2LDM5LjAyLDM0LjIzNiwzOS4zNTEsMzIuMzk5LDM5Ljc0NXogTTY5LjA2MywzNi45NzQJYy0wLjAzNywwLTAuMDczLTAuMDA0LTAuMTEtMC4wMTJjLTMuMTg4LTAuNzE4LTYuNjM3LTEuMjQ3LTEwLjI1LTEuNTczYy0wLjE0Ny0wLjAxMy0wLjI4Mi0wLjA5MS0wLjM2Ni0wLjIxMwljLTIuMTMzLTMuMDc2LTQuMzYzLTUuODk0LTYuNjI3LTguMzc3Yy0wLjE4LTAuMTk3LTAuMTczLTAuNTAxLDAuMDE2LTAuNjljNC4yMDEtNC4yMSw4LjE4My02LjkwOCwxMS41MTQtNy44aDAJYzEuODY5LTAuNSwzLjQzOC0wLjM4Nyw0LjY1NCwwLjMyMmMzLjM1NSwxLjk2LDMuOTg5LDguODQ1LDEuNjUzLDE3Ljk2OEM2OS40ODksMzYuODIzLDY5LjI4NywzNi45NzQsNjkuMDYzLDM2Ljk3NHogTTU5LjAyNSwzNC40MTRjMy4zOTMsMC4zMTUsNi42NDMsMC44MDgsOS42NzEsMS40NjdjMi4wNTEtOC4zMTMsMS41NDktMTQuNzE5LTEuMzA3LTE2LjM4N2MtMC45NzktMC41NzEtMi4yOTEtMC42NDYtMy44OTEtMC4yMgljLTMuMDc0LDAuODI0LTYuNzc3LDMuMzEyLTEwLjcyOCw3LjIwNkM1NC45MDcsMjguODU1LDU3LjAwOSwzMS41MjEsNTkuMDI1LDM0LjQxNHogTTMwLjkzNywzNi45NzQJYy0wLjIyNCwwLTAuNDI2LTAuMTUxLTAuNDg0LTAuMzc2Yy0yLjMzNi05LjEyMy0xLjcwMy0xNi4wMDcsMS42NTItMTcuOTY3YzAsMCwwLDAsMC4wMDEsMGMxLjIxNi0wLjcwOSwyLjc4Ny0wLjgyMiw0LjY1My0wLjMyMgljMy4zMzIsMC44OTMsNy4zMTMsMy41OSwxMS41MTQsNy44YzAuMTg4LDAuMTg5LDAuMTk1LDAuNDkzLDAuMDE2LDAuNjljLTIuMjY0LDIuNDgzLTQuNDk0LDUuMzAyLTYuNjI3LDguMzc3CWMtMC4wODQsMC4xMjItMC4yMTgsMC4yLTAuMzY2LDAuMjEzYy0zLjYxMiwwLjMyNi03LjA2MSwwLjg1NS0xMC4yNSwxLjU3M0MzMS4wMSwzNi45NywzMC45NzQsMzYuOTc0LDMwLjkzNywzNi45NzR6IE0zMi42MSwxOS40OTQJYy0yLjg1NSwxLjY2OC0zLjM1Nyw4LjA3NC0xLjMwNywxNi4zODdjMy4wMjgtMC42NTksNi4yNzgtMS4xNTIsOS42NzEtMS40NjdjMi4wMTctMi44OTMsNC4xMTgtNS41NTksNi4yNTQtNy45MzUJYy0zLjk1MS0zLjg5NC03LjY1My02LjM4Mi0xMC43MjgtNy4yMDZDMzQuOTA3LDE4Ljg0OCwzMy41OTMsMTguOTIyLDMyLjYxLDE5LjQ5NEwzMi42MSwxOS40OTR6IE01NC44NjQsMzUuMTIyCWMtMC4wMDgsMC0wLjAxNiwwLTAuMDI0LDBjLTMuMzA2LTAuMTYxLTYuMzczLTAuMTYxLTkuNjc5LDBjLTAuMjA2LDAuMDA1LTAuMzc0LTAuMDk0LTAuNDY1LTAuMjYzCWMtMC4wOTEtMC4xNy0wLjA3Ny0wLjM3NywwLjAzOC0wLjUzM2MxLjU4Ny0yLjE1NSwzLjIzNC00LjE4LDQuODk2LTYuMDE4YzAuMTktMC4yMDksMC41NTItMC4yMDksMC43NDIsMAljMS42NjEsMS44MzcsMy4zMDgsMy44NjIsNC44OTYsNi4wMThjMC4xMTQsMC4xNTUsMC4xMjksMC4zNjMsMC4wMzgsMC41MzNDNTUuMjE3LDM1LjAyMSw1NS4wNDcsMzUuMTIyLDU0Ljg2NCwzNS4xMjJ6IE01MCwzNAljMS4yNDIsMCwyLjUyNywwLjAyNiwzLjgzMywwLjA3N2MtMS4yNTItMS42NTctMi41MzgtMy4yMjgtMy44MzMtNC42ODRjLTEuMjk1LDEuNDU3LTIuNTgxLDMuMDI3LTMuODMzLDQuNjg0CUM0Ny40NzMsMzQuMDI2LDQ4Ljc1OCwzNCw1MCwzNHoiPjwvcGF0aD48L3N2Zz4="
            />
          </div>
          <div className="skill-icon">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
            />
          </div>
          <div className="skill-icon">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
            />
          </div>
          <div className="skill-icon">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills