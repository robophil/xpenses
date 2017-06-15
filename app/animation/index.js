"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.SlideUpLeft = [
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            transform: 'translateY(100%)',
        }),
        animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)', animations_1.style({
            opacity: 1,
            transform: 'translateY(0%)',
        }))
    ]),
    animations_1.transition(':leave', [
        animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)', animations_1.style({
            opacity: 0,
            transform: 'translateX(-100%)',
        }))
    ])
];
exports.SlideUpDown = [
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: '0',
            transform: 'translateY(100%)',
        }),
        animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)', animations_1.style({
            opacity: '1',
            transform: 'translateY(0%)',
        }))
    ]),
    animations_1.transition(':leave', [
        animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)', animations_1.style({
            opacity: '0',
            transform: 'translateY(-100%)',
        }))
    ])
];
exports.SlideLeftRight = [
    animations_1.transition(':enter', [
        animations_1.style({
            opacity: 0,
            transform: 'translateX(100%)',
        }),
        animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)', animations_1.style({
            opacity: 1,
            transform: 'translateX(0%)',
        }))
    ]),
    animations_1.transition(':leave', [
        animations_1.animate('750ms cubic-bezier(0.44, 1.49, 1, 1)', animations_1.style({
            opacity: 0,
            transform: 'translateX(-100%)',
        }))
    ])
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUF3RTtBQUUzRCxRQUFBLFdBQVcsR0FBSTtJQUMxQix1QkFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixrQkFBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUM7UUFDRixvQkFBTyxDQUFDLHNDQUFzQyxFQUFFLGtCQUFLLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCLENBQUMsQ0FBQztLQUNKLENBQUM7SUFDRix1QkFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixvQkFBTyxDQUFDLHNDQUFzQyxFQUFFLGtCQUFLLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsbUJBQW1CO1NBQy9CLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQUk7SUFDMUIsdUJBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsa0JBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDO1FBQ0Ysb0JBQU8sQ0FBQyxzQ0FBc0MsRUFBRSxrQkFBSyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLGdCQUFnQjtTQUM1QixDQUFDLENBQUM7S0FDSixDQUFDO0lBQ0YsdUJBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsb0JBQU8sQ0FBQyxzQ0FBc0MsRUFBRSxrQkFBSyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxHQUFHO1lBQ1osU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0gsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFJO0lBQzdCLHVCQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLGtCQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQztRQUNGLG9CQUFPLENBQUMsc0NBQXNDLEVBQUUsa0JBQUssQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxnQkFBZ0I7U0FDNUIsQ0FBQyxDQUFDO0tBQ0osQ0FBQztJQUNGLHVCQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLG9CQUFPLENBQUMsc0NBQXNDLEVBQUUsa0JBQUssQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdGF0ZSwgc3R5bGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlVXBMZWZ0ID0gIFtcclxuICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLFxyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyxcclxuICAgIH0pKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgIGFuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScsIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxyXG4gICAgfSkpXHJcbiAgXSlcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZVVwRG93biA9ICBbXHJcbiAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAnMCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknLFxyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKCc3NTBtcyBjdWJpYy1iZXppZXIoMC40NCwgMS40OSwgMSwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknLFxyXG4gICAgfSkpXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAnMCcsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyxcclxuICAgIH0pKVxyXG4gIF0pXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVMZWZ0UmlnaHQgPSAgW1xyXG4gIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoJzc1MG1zIGN1YmljLWJlemllcigwLjQ0LCAxLjQ5LCAxLCAxKScsIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxyXG4gICAgfSkpXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgYW5pbWF0ZSgnNzUwbXMgY3ViaWMtYmV6aWVyKDAuNDQsIDEuNDksIDEsIDEpJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXHJcbiAgICB9KSlcclxuICBdKVxyXG5dO1xyXG4iXX0=