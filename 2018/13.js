var input;

input = ["                                  \/------------------------------------------------------------------------------------------------------\\            ",
"                                  |                                                  \/------------------------------\\               \/----+---\\        ",
"                                  |                                 \/----------------+-------------\\                |               | \/--+---+----\\   ",
" \/-----------------------------\\  |                         \/-------+------------\\   |    \/--------+----------------+---------------+-+--+---+----+-\\ ",
" |                             |  |                         |       |            |   |  \/-+--------+----------------+----\\          | |  |   |    | | ",
" | \/---------------------------+--+-------------------------+-------+------------+---+--+-+--------+----------\\     |    |          | |  |   |    | | ",
" | |  \/--------------------\\   |  |                     \/---+------\\|            |   |  | |        |          |     |    |          | |  |   |    | | ",
" | |  |                    |   |  |  \/------------------+---+------++------------+---+--+-+--------+----------+-----+----+-------\\  | |  |   |    | | ",
" | |  |                    |   |  |  |                  |   |      ||            |   |  | |        |          |     |    |       |  | |  |   |    | | ",
" | |  | \/------------------+---+--+--+------------------+---+------++-\\          |   |  | |        |          |     |    |       |  | |  |   |    | | ",
" | |  | |             \/----+---+--+--+------------------+---+------++-+----------+---+--+-+--------+----------+-----+-\\  |       |  | |  |   |    | | ",
" | |  | |             |    |   |  |  |                  |   |      |\\-+----------+---+--+-+--------\/          |     | |  |       |  | |  |   |    | | ",
" | |  | |             | \/--+---+--+--+---------------\\  |   |      |  |         \/+---+--+-+-------------------+-----+-+--+-------+--+-+--+---+---\\| | ",
" | |  | |             | |  |   |  |  |               |  |   |      |  |         ||   |  | |               \/---+-----+-+--+-------+\\ | |  |   |   || | ",
" | |  | |             | |\/-+---+--+--+---------------+--+---+------+--+---------++---+--+-+-------------\\ |   |     | |  |       || | |  |   |   || | ",
" | |  | |             | || |   |  |  |               |  |   |      |  |         ||   |  | |             | |   |     | |  |       || | |  |   |   || | ",
" |\/+--+-+-------------+-++-+---+--+--+---\\  \/--------+--+---+------+--+---------++---+--+-+-------------+-+---+-----+-+-\\|       || | |  |   |   || | ",
" |||  | | \/-----------+-++-+---+--+--+---+--+--------+--+---+------+--+---------++---+-\\| |      \/------+-+---+\\    | | ||       || | |  |   |   || | ",
" |||  | | |     \/-----+-++-+---+--+--+---+--+-\\   \/--+--+---+------+--+------\\  ||   | || |      |      | |   ||    | | ||       || | |  |   |   || | ",
" |||  | | |     |     | || |   |  |  |   |  |\/+---+--+--+---+------+--+------+--++---+-++-+------+------+-+---++----+-+-++-------++\\| |  |   |   || | ",
" |||  | | |     |     | || |   |  |\/-+---+--+++-\\ |  |  |   |      |  |      |  ||   | || \\------+------+-+---++----+-+-++-------++++-+--+---+---++-\/ ",
" |||  | | |     |     | || |   |  || |   |  ||| | |  |  |   |    \/-+--+------+--++\\  | ||        |      | |   ||   \/+-+-++--\\    |||| |  |   |   ||   ",
" |||  | | |     |  \/--+-++-+---+-\\|| |   |  ||| | |  |  |   |    | |  |      |  |||  | |^    \/---+------+-+---++---++-+-++--+----++++-+--+--\\|   ||   ",
" |||  | | |  \/--+--+--+-++-+---+-+++-+---+--+++-+-+--+--+---+----+-+--+------+--+++--+-++----+---+------+-+--\\||   || | ||  |    |||| |  |  ||   ||   ",
" |||  | | |  |  |  |  | || |   | ||| |   |  ||| | |  |  |   |    | |  |      |  |||  | ||    |   |      | |  |||   || | ||  |    |||| |  |  ||   ||   ",
" |||  | | | \/+--+--+--+-++-+---+-+++-+---+--+++-+-+--+--+---+----+-+--+------+--+++--+-++----+---+------+-+--+++\\  || | ||  |    |||| |  |  ||   ||   ",
"\/+++--+-+-+-++--+--+--+-++-+---+-+++-+---+--+++-+-+--+--+-\\ |    | |  |      |  |||  | ||    |   |      | |  ||||  || | ||  |    |||| |  |  ||   ||   ",
"||||  | | | ||  |  |  | || |   | ||| |   |  ||| | |  |  | | |    | |  |     \/+--+++--+-++----+---+------+-+--++++--++-+-++--+----++++-+--+--++---++\\  ",
"||||  | | | ||  | \/+--+-++-+---+-+++\\\\---+--+++-+-+--+--+-+-+----+-+--+-----++--+++--+-++----+---+------+-+--++++--++-+-++--+----\/||| |  |  ||   |||  ",
"||||  | | | ||  | ||  | || |   | ||||    |  ||| | |  |  | | |    | |  |\/----++--+++--+-++---\\|   \\------+-+--++\/|  || |\/++--+-----+++>+--+-\\||   |||  ",
"|||| \/+-+-+-++--+-++--+-++-+---+-++++\\   |  ||| | |  | \/+-+-+----+-+--++----++--+++--+-++---++-----\\    | | \/++-+--++-++++--+-----+++-+->+-+++\\  |||  ",
"|||| || | | ||  | ||  | || |   | |||||   |  ||| | |  | || | |    | |  ||    ||  |||  | ||   ||     |    | | ||| |  || ||||  |  \/--+++-+--+-++++--+++-\\",
"|||\\-++-+-+-++--+-++--+-++-+---+-+++++---+--+++-+-+--+-++-+-+----+-+--++----++--+++--+-++---++-----+----+-+-++\/ |  || ||||  |  |  ||| |  | ||||  ||| |",
"|||  || | | ||  | ||  | || |   | |||||\/--+--+++-+-+--+-++-+-+----+-+--++----++--+++--+-++---++--<--+----+-+-++--+--++-++++--+--+--+++-+-\\| ||||  ||| |",
"|||  || | | || \/+-++--+-++-+---+-++++++--+--+++-+-+--+-++-+-+----+-+--++----++--+++--+-++---++-----+----+-+-++--+--++\\||||  |  |  ||| | || ||||  ||| |",
"|||  || | | || || ||  | || |   |\/++++++--+--+++-+-+--+-++-+-+----+-+--++----++--+++--+-++---++-----+----+\\| ||  |  |||||||  |  |  ||| | || ||||  ||| |",
"|||  |\\-+-+-++-++-++--+-++-\/   ||||||||  |  ||| | |  | |\\-+-+----+-\/  ||    ||  |||  | ||   ||     |    ||| ||  |  |||||||  |  |  ||| \\-++-++++--+\/| |",
"|||  |  | | || ||\/++--+-++-----++++++++--+--+++-+-+--+-+--+-+----+----++----++--+++--+-++---++-\\   |    ||| ||  |  |||||||  |  |  |||   || ||||  | | |",
"|||  |  | | || |||||  | ||   \/-++++++++--+--+++-+-+--+-+--+-+--\\ \\----++----++--++\/  | ||   || |   |    ||\\-++--+--+++++++--+--+--\/||   || ||||  | | |",
"|||\/-+--+-+-++-+++++--+-++---+-++++++++--+--+++-+-+--+-+-\\| |  |      ||    ||  ||   | |\\---++-+---+----++--++--+--++++++\/  |  |   ||   || ||||  | | |",
"|||| |  | | || |||||  | ||   | |||||||| \/+--+++-+-+--+-+-++-+--+------++----++--++---+-+----++-+---+----++--++\\ |  ||||||   |  |   ||   || ||||  | | |",
"||||\/+--+-+-++-+++++--+-++---+-++++++++-++--+++-+-+--+-+-++-+--+------++----++<-++---+-+----++-+\\  |    ||  ||| |  ||||||   |  |   ||   || ||||  | | |",
"||||||  | | || |||||  | ||   | |||||||| ||  \\++-+-+--+-+-++-+--+------++----++--++---+-+----++-++--+----++--+++-+--+++++\/   |  |   ||   || ||||  | | |",
"||||||  |\/+-++-+++++--+-++---+-++++++++-++---++-+-+--+-+-++-+--+------++----++--++-\\ | |    || ||  |    ||  ||| |  |||||    |  |   ||   || ||||  | | |",
"||||||  ||| || |||||  | ||   | |||||||| ||   || | \\--+-+-++-+--+------++----+\/  || | | |    || ||  |    ||  ||| |  |||||    |  |   ||   || ||||  | | |",
"||||||  ||| || |||||  | || \/-+-++++++++-++---++-+----+-+\\|| \\--+------++----+---+\/ | | |    || ||  |    ||  ||| |  ||||\\----+--+---++---++-\/|||  | | |",
"||||||  ||| || ||||\\--+-++-+-+-++\/||||| ||   || |    | ||||    | \/----++----+--\\|  | | |\/---++-++--+->--++--+++-+--++++-----+\\ |   ||   ||  |||  | | |",
"||||||  ||| || ||||   | || | | || ||||| ||   || |    | ||||    | |    ||    |  ||  | | ||   || ||  |    ||  ||| |  ||||   \/-++-+---++---++--+++--+\\| |",
"||||||  ||| || ||||   | || | | || ||||| ||   || |    | ||||    | |    ||    |  ||  | | ||   || ||  |  \/-++--+++-+--++++---+-++-+---++---++--+++--+++\\|",
"||||||  ||| || ||||   | || | | || ||||| ||   || |    | ||||    | |    ||    |  ||  | | ||   || ||  |  | ||  \\++-+--++++---+-++-+---++---++--++\/  |||||",
"||||||  ||| || ||||   | || | | || ||||| ||   || |    | ||||    | |    ||    |  ||  | | ||   |\\-++--+--+-++---++-+--++++---+-++>+---++---++--\/|   |||||",
"||||||  ||| || ||||   | \\+-+-+-++-+++++-++---++-+----\/ ||||    | |    ||    |  ||  | | ||   |  ||  |  | ||   || |  ||||   | || |   ||   ||   |   |||||",
"||||\\+--+++-++-++++---+--+-+-+-++-+++++-++---++-+------++++----+-+----++----+--++--+-+-++---+--+\/  |  | ||   || |  ||||   | || |   ||   ||   |   |||||",
"|||| |  ||| || ||||   |  | | | || ||||| ||   || | \/----++++----+-+----++----+--++--+-+-++---+--+---+--+-++---++-+--++++---+-++-+---++\\  ||   |   |||||",
"|||| |  ||| || ||||   |  | | | || ||||| ||   || | |    ||||    | |    ||   \/+--++--+-+-++---+--+---+--+-++---++-+-\\|||| \/-+-++-+---+++--++--\\|   |||||",
"|||| |  ||| || ||||   |  | | | || ||||| ||   ||\/+-+----++++----+-+--\\ ||   ||  ||  | | ||   | \/+---+--+-++---++-+-+++++-+-+-++-+---+++--++--++-\\ |||||",
"|||^ |  ||| || ||||   |  | | | || ||||| ||\/--++++-+----++++----+-+--+-++---++--++--+-+-++---+-++---+--+-++---++-+-+++++-+-+-++-+---+++--++--++\\| |||||",
"|||\\-+--+++-++-++++---+--+-+-+-++-+++++-+++--++++-+----++\/|    | |  | ||   ||  ||  | | ||   | ||   |  | ||   || | ||||| | | || |   |||  ||  |||| |||||",
"|||  |  ||| || ||||   |  |\/+-+-++-+++++-+++--++++-+----++-+\\   | |  | ||   ||  ||  | | ||   | ||   |  | ||   || | ||||| | | || |   |||  ||  |||| |||||",
"|||  |  ^|| || ||||   |  ||| | || ||||| |||  |||| |    || ||   | |  | ||   |\\--++--+-+-++---+-++---+--+-++---++-+-+++++-+-+-++-+---+++--++--++++-++\/||",
"|||  |  ||| || ||||   |  ||| | || ||||| |||  |||| |  \/-++-++---+-+--+\\||   |   ||  | | ||   | ||   |  | ||   || | ||||| | | || |   |||  ||  |||| || ||",
"|||  |  ||| || ||||   |  ||| | || ||||| |||  |||| |  | || ||   | |  ||||   |   ||  | | ||   | ||   |  | ||   || | ||||| | | || |   |||  ||  |||| || ||",
"|||  |  ||| || ||||   |  ||| | || \\++++-+++--++++-+--+-++-++---+-+--++++---+---++--+-+-++---+-++---+--+-++---++-+-+++++-+-+-++-+---+++--+\/  |||| || ||",
"|||  |  ||| || ||||   |  ||| | ||  |||| |||  |||| |  | || ||\/--+-+--++++---+---++--+-+-++---+-++---+--+-++---++-+-+++++-+-+-++-+\\  |||  |   |||| || ||",
"|||  |  ||| || ||||   |  ||\\-+-++--++++-+++--++++-+--+-+\/ |||  | |  ||||   |   ||  | | ||   | ||   |  | ||   || | ||||| | \\-++-++--+++--+---++++-+\/ ||",
"|||  |  ||| || ||||   |  ||  | ||  |||| |||  |||| |  | |  |||  | |  ||||   |   ||  | | ||   | ||   |  | ||   || | ||||| |   || ||  |||  |   |||| |  ||",
"|||  |  ||| || ||||   | \/++--+-++--++++-+++--++++-+--+-+--+++--+-+--++++---+\\  ||  | | ||   | ||   |  | ||   || | ||||| |   || ||  |||  |   |||| |  ||",
"|||  |  ||| || ||||   | |||  | ||  |||| |||  |||| |  | |  |||  | |  ||||   ||  ||  | | ||   | ||   |  | ||   || | ||||| |   || ||  |||  |   |||| |  ||",
"|||  |  ||| || ||||   | |||  | ||  |||| |||  |||| |  | |  |||  | |  ||||   ||  ||  | |\/++---+-++---+--+-++---++-+-+++++-+---++-++--+++--+\\  |||| |  ||",
"|||  |  ||| || ||||   | |||  | ||  |||| |||\/-++++-+--+-+--+++--+-+--++++---++--++--+-++++---+-++---+--+-++---++-+-+++++-+---++-++--+++--++\\ |||| |  ||",
"|||  |  ||| || ||||   | |||\/-+-++--++++-++++-++++-+--+-+--+++--+-+--++++\\  ||  ||  | ||||   | ||   |  | ||   || | ||||| |   || ||  |||  ||| |||| |  ||",
"|||  |  ||| || |\\++---+-++++-+-++--++++-++++-+\/|| |  | |  |||  | |  |||||  ||  ||  | ||||   | ||   |  | ||   || | ||||| |   || ||  |||  ||| |||| |  ||",
"|||  |  \\++-++-+-++---+-++++-+-++--++++-++++-+-++-+--+-+--+++--+-+--++\/||  ||  ||  | ||||   | ||   |  | ||   || | ||||| |   || ||  |||  ||| |||| |  ||",
"|||  |   || || | ||   | |||| | ||  |||| |||| | || |  | |  |||  | |  || ||  ||  ||  | ||||   | ||   |  | ||   || | ||||| \\---++-++--+++--+++-\/||| |  ||",
"|||  |   || || | ||   | ||||\/+-++--++++-++++-+-++-+--+-+--+++--+-+--++-++--++--++--+-++++-\\ | ||   |  | ||   || | |||||     || ||  |||  |||  ||| |  ||",
"|||  |   || || | ||   | |||||| ||  |||| |||| | ||\/+--+-+--+++--+-+--++-++--++--++--+-++++-+-+-++---+--+-++---++-+-+++++-----++-++\\ |||  |||  ||| |  ||",
"|||  |   || || | ||   | |||||| ||  |||| |||| | ||||  |\/+--+++--+-+--++-++--++-\\||  |\/++++-+-+-++---+--+-++-\\ || | |||||     || ||| |||  |||  ||| |  ||",
"|||  |   |\\-++-+-++---+-++++++-++--++++-++++-+-++++--+++--+++--+-+--++-++--++-+++--++++\/| | | ||   |  | || | || | |||||     || ||| |||  |||  ||| |  ||",
"|||  |   |  || | \\+---+-++++++-++--++++-++++-+-++++--+++--+++--+-+--++-++--++-+++--++++-+-+-+-+\/   |  | || | || | |||||     || ||| |||  |||  ||| |  ||",
"|||  |   | \/++-+--+---+-++++++-++--++++-++++-+-++++--+++-\\|||  | |  || ||  || |||  |||| | | | |    |  | || | || | |||||     || ||| |||  |||  ||| |  ||",
"|||  |   | ||| |  |  \/+-++++++-++--++++-++++-+-++++\\ ||| ||||  | |  || ||  || |||  |||| | | | |    |  | || | || | |||||     || ||| v||  |||  ||| |  ||",
"|||  |   | ||| |  |  || |||||| ||  |||| |||| | ||||| ||| ||||  | |  || ||  || |||  |||| | | | |   \/+--+-++-+\\|| | |||||     || ||| |||  |||  ||| |  ||",
"|||  |   | ||| |  |  || |||||| ||  |||^ |||| | ||||| ||| ||||  | |  || ||  \\+-+++--++++-+-+-+-+---++--+-++-++++-+-\/||||     || ||| |||  |||  ||| |  ||",
"|||  |   | |\\+-+--+--++-++++++-++--++++-++++-+-+++++-+++-++++--+-+--++-++---+-+++--++++-+-+-+-+>--++--+-++-++++-\/  ||||     || ||| |||  |||  ||| |  ||",
"|||  |   | | | | \/+--++-++++++-++--++++-++++-+-+++++-+++-++++--+-+--++-++---+-+++\\ |||| | | | |   ||  | || ||||    ||||\/----++-+++-+++--+++-\\||| |  ||",
"|||  |   | | | | |\\--++-++++++-++--+\/|| |||| | ||||| ||| ||||  | |\/-++-++---+-++++-++++-+-+-+-+---++--+-++-++++----+++++----++-+++-+++--+++\\|||| |  ||",
"|||  |   | | | | |   || |||||| ||  | || |||| | ||||| ||| ||||  | || || ||   | |||| ||||\/+-+-+-+---++--+-++-++++----+++++----++\\||| |||  |||||||| |  ||",
"|||  |   | | | | |   || |||||| ||  | || |||| | ||\\++-+++-++++--+-++-++-++---+-++++-++++++-+-+-+---++--+-++-++++----+++++----+++++\/ |||  |||||||| |  ||",
"|||  |   v | | | |  \/++-++++++-++--+-++-++++-+-++-++-+++-++++--+-++-++-++\\  | |||| ||\\+++-+-+-+---++--+-++-++++----+\/|||    |||||  |||  |||||||| |  ||",
"|||  |   | | | | |  ||| |||||| || \/+-++-++++-+-++-++-+++-++++--+-++-++-+++--+-++++-++-+++-+-+-+---++--+-++-++++\\   | |||    |||||  |||  |||||||| |  ||",
"|||  |   | | | | |  ||| |||||| || ||\/++-++++-+-++-++-+++-++++--+-++-++-+++--+-++++-++-+++-+\\| |   ||  | || |||||   | |||    |||||  |||  |||||||| |  ||",
"|||  |   | | | | |  ||| |||||| || ||||| |||| | || || |\\+-++++--+-++-++-+++--+-\/||| || ||| ||| |   ||  | || |||||   | |||    |||||  |||  |||||||| |  ||",
"|||  |   | | | | |  ||| |||||| || ||||| |||| | || || | | |||\\--+-++-++-+++--+--+++-++-+++-+++-+---++--+-++-+++++---+-+++----++++\/  |||  |||||||| |  ||",
"|||  |   | | | | |  ||| |||||| || ||||| |||| | || || | | |||   | || || |||  |  ||| || ||| ||| |   ||  | || |||||   | |||    ||||   |||  |||||||| |  ||",
"|||  |   | | | | |  ||| |||||| || ||||| |||| | || || | | |||   | |\\-++-+++--+--+++-++-+++-+++-+---++--+-++-+++++---+-+++----++++---+++--+++\/|||| |  ||",
"|||  |   | | | | |  ||| |||\\++-++-+++++-++++-+-++-++-+-+-+++---+-+--++-+\/|  |  ||| || ||| ||| |   ||  | || |||||   \\-+++----\/|||   |||  ||| |||| |  ||",
"|||  |   | | | \\-+--+++-+++-++-++-+++++-++++-+-++-++-+-+-+++---+-+--++-+-+--+--+++-++-+++-+++-+---++--+-++-+++++-----\/||     |||   |||  ||| |||| |  ||",
"|||  |   | | |   |  ||| ||| || || ||||| |||| v || || | | |||   | |  || | |  |  ||| || |||\/+++-+---++--+-++-+++++------++--\\  |||   |||  ||| |||| |  ||",
"|||  |   | | |   |  ||| ||| || || ||||| |||| | || || | | |||   | |  || | |  |  ||| || \\++++++-+---++--+-++-+++++------++--+--+++---+++--+\/| |||| |  ||",
"|||  |   \\-+-+---+--+++-+++-++-++-+++++-++++-+-++-++-+-+-+++---+-+--++-+-+--+--+++-\/|  |||||| |   ||  | || |||||      ||  |  ||\\---+++--+-+-++++-+--+\/",
"|||  |     | |   |  ||| ||| || || ||||| |||| | \\+-++-+-+-+++---+-+--\/| | |  |  |||  |  |||||| |   ||  | || |||||      ||  |  ||    |||  | | |||| |  | ",
"|||  |     | |   |  ||| ||| || || ||||| |||| |  | || | | |||   | |   | | |  |  |||  |  |||||| |\/--++--+-++-+++++------++--+\\ ||    |\\+--+-+-+\/|| |  | ",
"|||  |     | |   \\--+++-+++-++-++-+++++-++++-+--+-++-+-+-+++---+-+---+-+-+--+>-++\/  |  |||||| \\+--++--+-++-+++++------++--++-++----+-+--+-+-+-+\/ |  | ",
"|||  |     | |      ||| ||| || || ||||| |||| |  | || | | |||   | |   | | |  |  ||   |  ||||||  |  ||  | || |||||      ||  || ||    | |  | | | |  |  | ",
"|||  |     | |      ||| ||| |\\-++-+++++-++++-+-<+-++-+-+-+++---\/ |   | | |  |  ||   |  ||||||  |  ||  | || |||||      ||  || ||    | | \/+-+-+-+--+\\ | ",
"||\\--+-----+-+------+++-+++-+--++-+++++-+\/|| |  | || | | |||     |   | | |  |  ||   |  ||||||  |  ||  | ||\/+++++------++--++\\||    | | || | | |  || | ",
"||   |     | |      ||| ||| |  || ||||| | || |  | || | | |||     |  \/+-+-+--+--++---+--++++++-\\|  ||  | ||||||||      |\\--+++++----+-+-++-+-\/ |  || | ",
"||   \\-----+-+------+++-+++-+--++-+++\/| | || |  | || | | |||     |  || \\-+--+--++---+--+++++\/ ||  ||  | ||||||||    \/-+---+++++----+-+-++-+---+--++-+\\",
"|\\---------+-+------+++-+++-+--\/| |||\/+-+-++-+--+-++-+-+-+++-----+--++---+--+--++---+\\ |||||  ||  ||  | ||||||||    | |   |||||    | | || |   |  || ||",
"|          | |      ||\\-+++-+---+-+++++-+-++-+--+-++-+-+-+++-----+--++---+--+--++---++-+++++--++--++--+-++++++++----+-\/   |||||    | | || |   |  || ||",
"|          | |      ||  ||| |   | ||||| \\-++-+--+-++-+-+-+++-----+--++---+--+--++---++-+++++--++--++--+-++++++\/|    |     |||||    | | || |   |  || ||",
"\\----------+-+------++--+++-+---+-+++++---++-+--+-++-+-+-+\/|     |  ||   |  |  ||   || |||||  ||  ||  | |||||| |    |     |||||    | | || |   |  || ||",
"           | |      ||  ||| |   | |||||   || |  | || | | | |     |  ||   |  |  |\\---++-+++++--++--++--+-++++++-+----+-----+++++----+-+-++-+---+--\/| ||",
"        \/--+-+------++--+++-+\\  | |||||\/--++-+--+-++-+-+-+-+-----+--++\\  |  |  |    || ||\\++--++--++--+-++++++-+----+-----\/||||    | | || |   |   | ||",
"\/-------+--+-+------++--+++-++--+-++++++--++-+--+-++-+-+-+-+-----+--+++--+--+--+----++-++-++--++\\ ||  | |||||| |    |      ||||    | | || |   |   | ||",
"|       |  | |      ||  |\\+-++--+-++++++--++-+--+-++-+-+-+-+-----+--+++--+--+--+----++-++-++--+++-++--+-\/||||| |    |      ||||    | | || |   |   | ||",
"|       |  | |      ||  | | ||  | |\\++++--++-+--\/ || \\-+-+-+-----+--+\/|  |  |  |    || || ||  ||| ||  |  ||||| |    |      ||||    | | || |   |   | ||",
"|       |  | |      ||  | |\/++--+-+-++++--++-+----++---+-+-+-----+--+-+--+--+--+----++-++-++-\\||| ||  |  ||||| |    |   \/--++++---\\| | || |   |   | ||",
"|       |  \\-+------++--+-++++--+-+-++++--++-+----++---+-\/ |    \/+--+-+--+--+--+----++-++-++-++++-++--+--+++++-+----+--\\|  ||||   || | || |   |   | ||",
"|       |    |      ||  | ||||  | | ||||  |\\-+----++---+---+----++--+-+--+--+--+----++-++-++-++++-++--+--+++++-+----+--++--++++---++-+-++-\/   |   | ||",
"|       |\/---+------++--+-++++--+-+-++++--+--+----++--\\|   |    ||  | |  |  | \/+----++-++-++-++++-++--+--+++++-+----+--++--++++---++-+-++-----+---+\\||",
"|       ||  \/+------++--+-++++--+-+-++++--+--+----++--++---+----++--+-+--+--+-++----++-++-++-++++-++--+--+++++-+--\\ |  ||  ||||   || | ||     |   ||||",
"|       ||  ||      ||  | ||||  | | ||||  |  |    ||  ||   |    ||  | |  |  | ||    || || || |||| ||  \\--+++++-+--+-+--++--++++---++-+-++-----+---++\/|",
"|       ||  ||      ||  | ||||  | | ||||  |  |    \\+--++---+----++--+-+--+--+-++----++-++-++>++++-++-----+++++-+--+-+--++--++++---++-\/ ||     |   || |",
"|       ||  ||      ||  | ||||  | | ||||  |  |     |  ||   |    ||  | |  |  | ||    \\+-++-++-++++-++-----++\/|| |  | |  ||  ||||   ||   ||     |   || |",
"|       ||  ||      ||  | ||||  | | ||||  |  \\-----+--++---+----++--+-+--+--+-++-----+-++-++-++++-++-----++-++-+--+-+--++--++++---+\/   ||     |   || |",
"|       ||  |\\------++--+-++++--+-+-++++--+--------+--++---+----++--+-+--+--+-++-----+-++-++-++++-++-----++-+\/ |  | |  ||  ||||   |    ||     |   || |",
"|       ||  |       ||  | ||||  \\-+-++++--+--------+--++---+----++--+-+--+--+-++-----+-++-++-++++-++-----\/| |  |  | |  ||  ||||   |    ||     |   || |",
"|       ||  |       ||  | ||||    | ||||  |        |  |\\---+----++--+-+--+--+-++-----+-++-++-++++-+\/      | |  |  | |  ||  ||||   |    ||     |   || |",
"|   \/---++--+\\      ||  | ||||    | ||||  |        |  |    |    ||  \\-+--+--+-++-----+-++-++-+\/|| |       | |  |  | |  ||  ||||   |    ||     |   || |",
"|   |   ||  ||      ||  | ||||    | ||\\+--+--------+--+----+----++----+--+--+-++-----+-++-++-+-++-+-------+-+--+--+-+--++--++++---+----+\/     |   || |",
"|   |   ||  ||      ||  | ||||    | || \\--+--------+--+----+----++----\/  |  | ||     | || || | || |       | |  |  | |  |\\--++++---\/    |      |   || |",
"|   |   ||  ||      ||  | ||||    | ||    |        |  |    |    \\+-------+--+-++-----+-++-++-+-++-+-------+-+--+--+-+--\/   ||||        |      |   || |",
"|   |   ||  ||      |\\--+-++++----+-++----+--------\/  |    |     |       |  | ||     | || || | || |       | |  |  | |      ||||        |      |   || |",
"|   |   ||  ||      |   | ||||    | ||    \\-----------+----+-----+-------+--+-++-----+-++-++-+-++-+-------+-+--+--+-+------++++--------+------\/   || |",
"\\---+---++--++------+---+-++++----+-++----------------+----+-----+-------+--+-++-----+-++-++-+-+\/\/+-------+-+--+\\ | |      ||||        |          || |",
"    |   |\\--++------+---+-++++----+-++----------------\/    |     |       |  | ||     | || || | | ||       | |  || | |      ||||        |          || |",
"    |   |   \\+------+---+-++++----+-++---------------------+-----+-------+--+-++-----+-++-++-+-+-++-------+-+--++-\/ |      ||||        |          || |",
"    |   |    |      |   \\-++++----+-++---------------------+-----+-------+--\/ \\+-----+-++-++-+-+-++-------+-+--++---+------++++--------+----------+\/ |",
"    |   |    |      |     ||||    | ||                     |     |       |     |     | \\+-++-+-+-++-------+-+--++---+------+++\/        |          |  |",
"    |   |    |      |     ||||    | \\+---------------------+-----+-------+-----+-----+--+-+\/ | | ||       | |  ||   |      |||         |          |  |",
"    |   |    |      |     ||||    |  |                     |     |       |     |     |  | |  | | ||       | |  ||   |      |||         |          |  |",
"    |   |    |      |     ||||    \\--+---------------------+-----+-------+-----+-----+--+-+--+-+-++-------+-+--\/|   |      |||         |          |  |",
"    |   |    |      |     \\+++-------+---------------------\/     |       |     |     |  | |  | | ||       | |   |   \\------+++---------+----------+--\/",
"    \\---+----\/      |      \\++-------+---------------------------+-------+-----+-----+--+-+--\/ | \\+-------+-+---\/          |||         |          |   ",
"        |           \\-------++-------+---------------------------+-------\/     |     |  | |    \\--+-------+-+--------------\/||         |          |   ",
"        |                   ||       |                           \\-------------\/     |  | |       |       \\-+---------------\/|         |          |   ",
"        |                   \\+-------+-----------------------------------------------+--+-\/       |         |                |         \\----------\/   ",
"        \\--------------------\/       \\-----------------------------------------------\/  \\---------+---------+----------------\/                        ",
"                                                                                                  \\---------\/                                         "];

/*
input = ["\/>-<\\  ",
"|   |  ",
"| \/<+-\\",
"| | | v",
"\\>+<\/ |",
"  |   ^",
"  \\<->\/"];
//*/

var grid = [];
var carts = [];

var steps = 0;

var dir_display = {
	"left":"<",
	"right":">",
	"up":"^",
	"down":"v"
}

var dir_coord = {
	"left":[-1,0],
	"right":[1,0],
	"up":[0,-1],
	"down":[0,1]
}

function reset(){
	grid = [];
	carts = [];

	steps = 0;

	for(var i=0;i<input.length;i++){
		grid.push([]);
		for(var j=0;j<input[i].length;j++){
			var t = input[i][j];
			var obj = {
				"x":j,					//x-coordinate
				"y":i,					//y-coordinate
				"raw":t,				//raw character ( / \ + | )
				"type":null,			//type [ track | junction | intersection ]
				"type_specific":null,	//specific type [ track-up | track-left | 		junction-slash | junction-backslash | intersection ]
				"cart":-1				//cart id (-1 if no cart on the track)
			}

			//For the types
			switch(t){
				case "|":
				case "^":
				case "v":
				case "V":
					obj.type = "track";
					obj.type_specific = "track-up";
					break;
				case "-":
				case "<":
				case ">":
					obj.type = "track";
					obj.type_specific = "track-left";
					break;
				case "\/":
					obj.type = "junction";
					obj.type_specific = "junction-slash";
					break;
				case "\\":
					obj.type = "junction";
					obj.type_specific = "junction-backslash";
					break;
				case "+":
					obj.type_specific = obj.type = "intersection";
					break;
				default:
					obj.type = obj.type_specific = "empty";
			}

			var _cart = {};
			var _dir = { //x,y
				"<":"left",
				">":"right",
				"^":"up",
				"v":"down"
			}

			//For if it's a cart
			switch(t){
				case "<": case ">": case "^": case "V": case "v":
					_cart.x = j;
					_cart.y = i;
					_cart.dir = dir_coord[_dir[t]];
					_cart.dir_name = _dir[t];
					_cart.intersection = 0;
					carts.push(_cart);

					obj.cart = carts.length-1;
					obj.raw = "|";
					break;
			}

			grid[i].push(obj);
		}
	}

	outputCollisionData([]);
	printGrid();
}
reset();

function printGrid(){
	document.getElementById("out").innerHTML = '';

	var table = document.createElement("table");

	var x,y;

	//Before printing the grid, we need to set all the grid entries containing carts to the correct index because entries have been removed due to collisions
	for(i=0;i<carts.length;i++){
		var x = carts[i].x;
		var y = carts[i].y;

		grid[y][x].cart = i;
	}

	//Now loop through the 2D grid array and create a table accordingly
	for(y=0;y<grid.length;y++){
		var tr = document.createElement("tr");
		for(x=0;x<grid[y].length;x++){
			var td = document.createElement("td");
			td.className = grid[y][x].type+" "+grid[y][x].type_specific;
			td.id = "grid_"+x+"_"+y;

			if(grid[y][x].raw == "\/"){
				td.innerHTML = "\/";
			}
			else if(grid[y][x].raw == "\\"){
				td.innerHTML = "\\";
			}

			var _c = grid[y][x].cart;
			if(_c!=-1){
				td.className = "cart cart_"+_c;
				if(carts[_c])
					td.innerHTML = dir_display[ carts[_c].dir_name ];
				else{
					console.error(y,x,grid[y][x].cart);
				}
			}

			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	document.getElementById("out").appendChild(table);
}

function nextStep(print_grid){
	var i,j;
	var collisions = [];

	if(carts.length == 1){ //Last dude remaining
		//outputFinalCartData();
		return "FINAL";
	}

	//Since top row's cart moves first, then left to right we need to sort accordingly
	carts.sort(
		firstBy(function(a,b){
			return a.y-b.y;
		})
		.thenBy("x")
	);

	//for(i=0;i<carts.length;i++) grid[carts[i]["y"]][carts[i]["x"]].cart = i;

	for(i=0;i<carts.length;i++){
		//Next step for each cart by its direction and whether it's at an intersection or junction
		var track = grid[carts[i]["y"]][carts[i]["x"]];

		switch(track.type_specific){
			case "track-up": 	// '|'
			case "track-left": 	// '-'
				//No change, just move
				break;
			case "junction-slash": // '/'
				switch(carts[i].dir_name) {
					case "down": //go left
						carts[i].dir_name = "left";
						break;
					case "up": //go right
						carts[i].dir_name = "right";
						break;
					case "right": //go up
						carts[i].dir_name = "up";
						break;
					case "left": //go down
						carts[i].dir_name = "down";
						break;
					default:
						break;
				}
				break;
			case "junction-backslash": // '\'
				switch(carts[i].dir_name) {
					case "up": //go left
						carts[i].dir_name = "left";
						break;
					case "down": //go right
						carts[i].dir_name = "right";
						break;
					case "left": //go up
						carts[i].dir_name = "up";
						break;
					case "right": //go down
						carts[i].dir_name = "down";
						break;
					default:
						break;
				}
				break;
			case "intersection": // '+'
				switch(carts[i].intersection){
					//NOTE: Directions are all relative to the current cart's direction (ie. if the cart is moving 'left', 'go left' implies go up)
					case 0: //go left
						switch(carts[i].dir_name){
							case "up": carts[i].dir_name = "left"; break;
							case "left": carts[i].dir_name = "down"; break;
							case "down": carts[i].dir_name = "right"; break;
							case "right": carts[i].dir_name = "up"; break;
						}
						break;
					case 1: //go straight, so do nth
						break;
					case 2:
						switch(carts[i].dir_name){
							case "down": carts[i].dir_name = "left"; break;
							case "right": carts[i].dir_name = "down"; break;
							case "up": carts[i].dir_name = "right"; break;
							case "left": carts[i].dir_name = "up"; break;
						}
						break;
					default:
						console.error("ERROR: Cart",i,"intersection number not found");
						break;
				}

				carts[i].intersection++;
				if(carts[i].intersection==3) carts[i].intersection = 0;
				break;
			default:
				console.error("ERROR: CART",i,"NOT ON A TRACK!");
				return "ERROR";
		}

		//Movement based on direction
		carts[i].dir = dir_coord[carts[i].dir_name];

		carts[i]["x"]+=carts[i].dir[0];
		carts[i]["y"]+=carts[i].dir[1];

		//Collision detection
		var _c = grid[carts[i]["y"]][carts[i]["x"]].cart;
		if(_c != -1){
			//Remove cart from old 'track'
			track.cart = -1;
			grid[ carts[i]["y"] ][ carts[i]["x"] ].cart = -1;

			collisions.push({
				"carts":[ i, _c ], //ids of collisions: cart and the cart it collides with
				"coords":{ //coords of collisions
					"x":carts[i]["x"],
					"y":carts[i]["y"]
				}
			});
		}
		else{
			//Remove cart from old 'track'
			track.cart = -1;

			//Indicate that new 'track' has this cart
			grid[carts[i]["y"]][carts[i]["x"]].cart = i;
		}
	}

	steps++;
	if(print_grid) printGrid();

	return collisions;
}

function nextSteps(nSteps){
	var collisions = [];
	while(nSteps-- && collisions.length==0){
		collisions = nextStep();

		if(collisions == "FINAL"){
			//console.log("Final cart!");
			outputFinalCartData();
			return; 		//Last cart found
		}
		if(collisions == "ERROR") return; //ERROR
	}

	outputCollisionData(collisions);
}

function nextCrash(){
	if(carts.length == 1){
		outputFinalCartData();
		return;
	}

	var collisions = [];
	while(collisions.length==0){
		collisions = nextStep();

		if(collisions == "FINAL"){
			//console.log("Final cart!");
			outputFinalCartData();
			return; 		//Last cart found
		}
		if(collisions == "ERROR") return; //ERROR
	}

	outputCollisionData(collisions);
}

function allCrashes(){
	while(carts.length>1){
		nextCrash();
	}

	outputFinalCartData();
}

function outputFinalCartData(){
	var x = carts[0].x;
	var y = carts[0].y;
	//Because the array has been changed, the 'cart' index in the grid will also change
	grid[y][x].cart = 0;

	//Remove all collisions on grid
	var coln = document.getElementsByClassName("collision");
	for(i=0;i<coln.length;i++){
		var ele = coln[i];
		var coord = ele.id.split("_");
		var _x = coord[1];
		var _y = coord[2];

		ele.className = grid[_y][_x].type+" "+grid[_y][_x].type_specific;

		if(grid[_y][_x].raw == "\/"){
			ele.innerHTML = "\/";
		}
		else if(grid[_y][_x].raw == "\\"){
			ele.innerHTML = "\\";
		}
		else{
			ele.innerHTML = "";
		}
	}

	//Output number of steps and final cart data
	document.getElementById("out_data").innerHTML = "Steps: "+steps;
	console.log("Steps taken:",steps);

	document.getElementById("out_data").innerHTML += " | Final cart at: ("+x+","+y+")";

	//Show where the last cart is
	document.getElementById("grid_"+x+"_"+y).className = "last_cart";
}

function outputCollisionData(collisions){
	document.getElementById("out_data").innerHTML = "Steps: "+steps;
	console.log("Steps taken:",steps);

	var indexesToRemove = [];

	for(var i=0;i<collisions.length;i++){
		var collision = collisions[i];

		var x = collision.coords.x;
		var y = collision.coords.y;

		document.getElementById("out_data").innerHTML += " | Collision at: ("+x+","+y+") with carts: "+JSON.stringify(collision.carts);

		console.log("Collision data:",collision);

		//Mark carts that are to be removed after crash
		indexesToRemove.push(collision.carts[0]);
		indexesToRemove.push(collision.carts[1]);
	}

	//Remove the bigger-index cart first so that the smaller-index one won't have it's index changed. To do this we sort in reverse order
	indexesToRemove.sort(function(a,b){
		return b-a;
	});

	for(var i=0;i<indexesToRemove.length;i++){
		var ind = indexesToRemove[i];
		grid[carts[ind].y][carts[ind].x].cart = -1;

		carts.splice(ind,1);
	}

	printGrid();

	for(var i=0;i<collisions.length;i++){
		var collision = collisions[i];
		var x = collision.coords.x;
		var y = collision.coords.y;

		document.getElementById("grid_"+x+"_"+y).className = "collision";
		document.getElementById("grid_"+x+"_"+y).innerHTML = "!";
	}
}
