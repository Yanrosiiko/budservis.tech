'use strict';

application.constant('CONSTANTS', {
    PICTURES: {
        COLOR_THEME:
            "<path d='M374.4,99.7c0-0.2,0.1-0.4,0.2-0.6c0.1-0.8,0.1-1.6,0.1-2.4c0.5,0.1,0.4-1.3-0.8-5.6c-0.7-2.4-1.7-4.6-2.8-6.9c-2.9-5.7-5.1-11.7-7.5-17.6c-5.6-13.6-11.1-27.5-19-40c-6.3-9.9-20.1-7.6-23.9,3.1C314,48.6,302.9,66,294.3,84c-2,4.2-5.4,10-6.5,15.5c-3,1.5-5.7,3.5-7.8,6.3c-3.7,4.8-0.5,11.4,3.8,14.4c11,7.6,32.3,3.6,44.9,3.8c13,0.2,33,4.4,44.8-2.1C381.9,117.2,381.8,105.1,374.4,99.7z'/>" +
            "<path d='M508.2,450c-36.8-91.8-95.4-174.3-122.9-269.8c-1.7-6-7.2-10.3-13.5-10.3c-31.7-0.1-63.1-0.6-94.6-3.7c-6-0.6-12.4,4.7-13.7,10.4c-20.8,89.7-56,172.3-97.7,253.9c-2.4,4.7-1.7,8.8,0.5,11.8c-0.3,0.4-0.6,0.8-0.9,1.2c-6.6,8.4-4.9,20.6,6.4,24.1c103.5,31.7,217.3,5.3,322.8,0.4C502.8,467.7,511.8,459.1,508.2,450z'/>" +
            "<path d='M266.4,735.6c-0.8-72.4,7.8-144.4-10.3-215.5c-3.6-14.3-23.9-13.4-28,0c-8.6,28.2-36,5.1-45.8-6.4c-8.2-9.7-25.5-1.9-24.9,10.3c3.5,74.3,7.6,148.6,9.5,223c1.9,75.2-2,150.5,0.8,225.6c0.1,1.5,0.6,2.7,1.2,3.7c0.6,7.9,7.3,15.7,17.3,13.2c22.5-5.6,46.8-6.2,69.9-6.7c7.8-0.2,13.4-6.2,13.8-13.8C273.8,890.9,267.2,813.6,266.4,735.6z'/>" +
            "<path d='M406.9,857.9c-12.3-110.1,12.1-220.7-7.8-330.6c-2-11.2-15.9-12-23.1-6.1c-20.7,17-43.4,13.1-63.6-0.2c-2.2-1.4-4.7-1.2-6.8-0.1c-5.1-0.2-10.4,3.1-11.1,10.1c-6.6,68.7-3.5,138.6-3.4,207.6c0.1,73.7-5.5,150.1,1.8,223.5c0.5,4.9,3,8.1,6.1,10c0,6.8,4.4,13.7,13.1,14.1c26.3,1.2,69.7,12.2,87.2-16.2C419.7,937,410.9,894.4,406.9,857.9z'/>" +
            "<path d='M502.8,514.8c-18.8,17.6-38.5,20-59.2,7.1c-0.8-0.4-1.6-0.7-2.4-0.9c-2.6-1-5.8-0.5-7.9,1.3c-5.3,3.1-8.2,10.1-3.3,15c-9,67-4.3,136.7-4.2,204c0.1,73.6-9.1,154.2,3.1,226.7c0.5,3,2.5,4.9,5,6c0.5,4.5,3.2,8.7,8.3,9.9c20,4.5,42.3,1.7,62.7,1.7c7.4,0,12.9-6,13.2-13.2c6.6-149.5,0.4-299.1,6.7-448.6C525.4,511.7,510.9,508.1,502.8,514.8z'/>" +
            "<path d='M727.6,19.3c-1.1-7-7.4-9.7-13.5-9.1c-1.7-0.5-3.5-0.3-5.1,0.7c-0.5,0.3-1,0.7-1.4,1.1l0,0c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.2c-27.3,23.5-53.1,48.3-81.9,70.3c-41.7,31.9-69.8,65.5-77.8,118.5c-13.7,91.4,43,180.2,128.8,209.5c83.1,28.4,156-55.7,165-131.2C854.6,168.9,743.1,119.8,727.6,19.3z M574.3,242.3c-2.3-28.7,2.5-57.5,15.5-82.5C579.1,185.5,573.9,214,574.3,242.3z M616.2,159.9c1,69.2,61.2,142.4,76.3,212.9C598.7,360.5,584.5,244.1,616.2,159.9z'/>" +
            "<path d='M757,436c-2.3-9.3-13.1-12.7-21-8.5c-27.1,14.4-53.9,15.3-83.9,15.3c-8.1,0-14.3,6.6-14.5,14.5c-0.7,27.9-45.9,229.5-15.5,240.4c2.7,5.6,8.6,9.8,16.3,8.3c47.4-9.4,139.6,30.7,152.2-36.3C805.3,591.2,775.4,511.5,757,436z M637.5,677.3c1.2-0.3,2.5-1.2,3.9-2.9c8.6-10.5,6.3-38.6,5.3-59.4c0.7-6.7,1.4-13.1,2.3-18.7c5.5-36.5,13-73.8,16.1-110.9c0-0.1,0-0.2,0.1-0.3c7.7,0.6,15.4,0.9,23.2,1.4c1.1,63.2,4.6,128,11.4,190.2C679,675.6,658.4,674.2,637.5,677.3z'/>" +
            "<path d='M810,758.8c-0.1-0.5-0.2-1-0.3-1.4c1.3-0.9,2.6-1.9,3.7-3c3.7-3.6,4.7-9.9,1.9-14.4c-0.1-0.2-0.2-0.3-0.3-0.5c-2.5-3.9-6.1-5.4-10-5.4c0,0,0,0,0,0c-28.8-2.5-59.7,2.5-88.9,3.2c-21.5,0.5-42.9,1.1-64.4,1.9c-13.2,0.5-29.1-1.2-42.8,2.2c-2.1,0-4.1,0.6-5.7,1.8c-1.8,0.7-3.5,1.5-5.2,2.4c-1.4,0.8-1.9,2.7-1.1,4.1c0.7,1.1,1.6,2.1,2.4,3.1c0.8,22.9,2.5,45.7,4.5,68.6c-0.8,7.8,0.1,15.6,2.1,23.2c3.6,39.1,7.3,78.1,7.8,117.4c0.1,8.3,6.3,12.9,13.8,13.8c59.4,7.7,120,6.8,179-3.9c6.3-1.1,10-7.7,10.3-13.5C820.1,891.8,817.1,825.1,810,758.8z'/>",
        CROSS:
            "<path d='M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z'/>",
        GLOBE:
            "<path d='M 31 2 C 21.816406 2 13.625 6.292969 8.308594 12.972656 C 8.257813 13.023438 8.199219 13.066406 8.160156 13.128906 C 8.148438 13.148438 8.144531 13.175781 8.132813 13.195313 C 4.296875 18.113281 2 24.292969 2 31 C 2 37.710938 4.296875 43.890625 8.140625 48.8125 C 8.152344 48.832031 8.148438 48.851563 8.164063 48.871094 C 8.21875 48.957031 8.285156 49.027344 8.359375 49.09375 C 13.675781 55.734375 21.847656 60 31 60 C 40.210938 60 48.425781 55.679688 53.738281 48.964844 C 53.769531 48.929688 53.808594 48.90625 53.832031 48.867188 C 53.839844 48.855469 53.839844 48.839844 53.847656 48.828125 C 57.699219 43.902344 60 37.71875 60 31 C 60 24.285156 57.699219 18.097656 53.851563 13.175781 C 53.84375 13.164063 53.84375 13.148438 53.832031 13.132813 C 53.804688 13.089844 53.761719 13.0625 53.730469 13.023438 C 48.414063 6.316406 40.203125 2 31 2 Z M 30 4.089844 L 30 17.984375 C 26.1875 17.917969 22.523438 17.46875 19.1875 16.675781 C 21.542969 9.589844 25.558594 4.730469 30 4.089844 Z M 32 4.089844 C 36.441406 4.730469 40.457031 9.589844 42.8125 16.675781 C 39.476563 17.46875 35.808594 17.917969 32 17.984375 Z M 23.957031 4.9375 C 21.167969 7.402344 18.820313 11.296875 17.230469 16.15625 C 14.746094 15.433594 12.484375 14.515625 10.535156 13.414063 C 14.015625 9.371094 18.664063 6.371094 23.957031 4.9375 Z M 38.042969 4.9375 C 43.335938 6.367188 47.984375 9.371094 51.464844 13.417969 C 49.515625 14.515625 47.253906 15.433594 44.769531 16.15625 C 43.179688 11.296875 40.832031 7.402344 38.042969 4.9375 Z M 9.273438 14.988281 C 11.414063 16.234375 13.910156 17.269531 16.660156 18.066406 C 15.996094 20.496094 15.511719 23.121094 15.242188 25.90625 C 15.1875 26.453125 15.59375 26.941406 16.140625 26.996094 C 16.175781 27 16.207031 27 16.238281 27 C 16.746094 27 17.183594 26.613281 17.234375 26.09375 C 17.492188 23.429688 17.96875 20.917969 18.609375 18.589844 C 22.132813 19.4375 25.996094 19.914063 30 19.984375 L 30 26 C 30 26.550781 30.449219 27 31 27 C 31.554688 27 32 26.550781 32 26 L 32 19.984375 C 36.007813 19.917969 39.871094 19.4375 43.390625 18.589844 C 44.03125 20.917969 44.511719 23.433594 44.765625 26.097656 C 44.820313 26.648438 45.300781 27.046875 45.859375 26.996094 C 46.410156 26.941406 46.8125 26.453125 46.757813 25.90625 C 46.488281 23.121094 46.003906 20.496094 45.34375 18.066406 C 48.09375 17.269531 50.589844 16.234375 52.726563 14.988281 C 56.039063 19.472656 58 25.011719 58 31 C 58 36.988281 56.035156 42.527344 52.722656 47.011719 C 50.585938 45.765625 48.089844 44.730469 45.339844 43.933594 C 46.003906 41.503906 46.488281 38.878906 46.757813 36.09375 C 46.8125 35.546875 46.40625 35.058594 45.859375 35.003906 C 45.3125 34.957031 44.820313 35.351563 44.765625 35.902344 C 44.507813 38.566406 44.03125 41.082031 43.390625 43.410156 C 39.867188 42.5625 36.003906 42.082031 32 42.015625 L 32 36 C 32 35.449219 31.550781 35 31 35 C 30.445313 35 30 35.449219 30 36 L 30 42.015625 C 25.992188 42.082031 22.128906 42.5625 18.609375 43.410156 C 17.96875 41.082031 17.492188 38.570313 17.234375 35.90625 C 17.179688 35.355469 16.699219 34.953125 16.140625 35.003906 C 15.589844 35.058594 15.1875 35.546875 15.238281 36.097656 C 15.507813 38.882813 15.996094 41.507813 16.65625 43.933594 C 13.90625 44.734375 11.410156 45.765625 9.273438 47.011719 C 5.964844 42.527344 4 36.988281 4 31 C 4 25.011719 5.964844 19.472656 9.273438 14.988281 Z M 6 29 C 5.449219 29 5 29.449219 5 30 L 5 32 C 5 32.550781 5.449219 33 6 33 C 6.550781 33 7 32.550781 7 32 L 7 30 C 7 29.449219 6.550781 29 6 29 Z M 11 29 C 10.449219 29 10 29.449219 10 30 L 10 32 C 10 32.550781 10.449219 33 11 33 C 11.550781 33 12 32.550781 12 32 L 12 30 C 12 29.449219 11.550781 29 11 29 Z M 16 29 C 15.449219 29 15 29.449219 15 30 L 15 32 C 15 32.550781 15.449219 33 16 33 C 16.550781 33 17 32.550781 17 32 L 17 30 C 17 29.449219 16.550781 29 16 29 Z M 21 29 C 20.449219 29 20 29.449219 20 30 L 20 32 C 20 32.550781 20.449219 33 21 33 C 21.550781 33 22 32.550781 22 32 L 22 30 C 22 29.449219 21.550781 29 21 29 Z M 26 29 C 25.449219 29 25 29.449219 25 30 L 25 32 C 25 32.550781 25.449219 33 26 33 C 26.550781 33 27 32.550781 27 32 L 27 30 C 27 29.449219 26.550781 29 26 29 Z M 31 29 C 30.449219 29 30 29.449219 30 30 L 30 32 C 30 32.550781 30.449219 33 31 33 C 31.550781 33 32 32.550781 32 32 L 32 30 C 32 29.449219 31.550781 29 31 29 Z M 36 29 C 35.449219 29 35 29.449219 35 30 L 35 32 C 35 32.550781 35.449219 33 36 33 C 36.550781 33 37 32.550781 37 32 L 37 30 C 37 29.449219 36.550781 29 36 29 Z M 41 29 C 40.449219 29 40 29.449219 40 30 L 40 32 C 40 32.550781 40.449219 33 41 33 C 41.550781 33 42 32.550781 42 32 L 42 30 C 42 29.449219 41.550781 29 41 29 Z M 46 29 C 45.449219 29 45 29.449219 45 30 L 45 32 C 45 32.550781 45.449219 33 46 33 C 46.550781 33 47 32.550781 47 32 L 47 30 C 47 29.449219 46.550781 29 46 29 Z M 51 29 C 50.449219 29 50 29.449219 50 30 L 50 32 C 50 32.550781 50.449219 33 51 33 C 51.550781 33 52 32.550781 52 32 L 52 30 C 52 29.449219 51.550781 29 51 29 Z M 56 29 C 55.449219 29 55 29.449219 55 30 L 55 32 C 55 32.550781 55.449219 33 56 33 C 56.550781 33 57 32.550781 57 32 L 57 30 C 57 29.449219 56.550781 29 56 29 Z M 30 44.015625 L 30 57.910156 C 25.558594 57.269531 21.542969 52.410156 19.1875 45.324219 C 22.523438 44.53125 26.191406 44.082031 30 44.015625 Z M 32 44.015625 C 35.8125 44.082031 39.476563 44.53125 42.8125 45.324219 C 40.457031 52.410156 36.441406 57.269531 32 57.910156 Z M 17.230469 45.84375 C 18.820313 50.703125 21.167969 54.597656 23.957031 57.0625 C 18.664063 55.632813 14.015625 52.628906 10.535156 48.582031 C 12.484375 47.484375 14.746094 46.566406 17.230469 45.84375 Z M 44.769531 45.84375 C 47.253906 46.566406 49.515625 47.484375 51.464844 48.585938 C 47.984375 52.628906 43.335938 55.628906 38.042969 57.0625 C 40.832031 54.597656 43.179688 50.703125 44.769531 45.84375 Z'/>",
        MENU:
            "<path d='M 4 6 A 1.0001 1.0001 0 1 0 4 8 L 20 8 A 1.0001 1.0001 0 1 0 20 6 L 4 6 z M 4 10 A 1.0001 1.0001 0 1 0 4 12 L 20 12 A 1.0001 1.0001 0 1 0 20 10 L 4 10 z M 4 14 A 1.0001 1.0001 0 1 0 4 16 L 20 16 A 1.0001 1.0001 0 1 0 20 14 L 4 14 z M 9.5917969 18 C 9.0657969 18 8.8018281 18.637766 9.1738281 19.009766 L 11.498047 21.333984 C 11.775047 21.610984 12.224953 21.610984 12.501953 21.333984 L 14.826172 19.009766 C 15.198172 18.637766 14.93325 18 14.40625 18 L 9.5917969 18 z'/>",
    }
});